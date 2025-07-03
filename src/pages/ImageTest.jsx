import { useState, useEffect } from 'react';
import { createImageObject } from '../utils/imageUtils';

export default function ImageTest() {
  const [testResults, setTestResults] = useState([]);
  const [simpleTest, setSimpleTest] = useState(null);
  const [comprehensiveTest, setComprehensiveTest] = useState([]);

  useEffect(() => {
    // Simple test first
    const testPath = '/GBPICS/Washing Machine spare pic/Motor/Wash Motor/Motor wash 06 copper.jpeg';
    const encodedPath = encodeURI(testPath);

    setSimpleTest({
      original: testPath,
      encoded: encodedPath,
      manual: '/GBPICS/Washing%20Machine%20spare%20pic/Motor/Wash%20Motor/Motor%20wash%2006%20copper.jpeg',
      symlink: '/gbpics-test/Motor/Wash%20Motor/Motor%20wash%2006%20copper.jpeg'
    });

    const testImages = [
      'Motor wash 06 copper.jpeg',
      'Motor wash 07 sealed.jpeg',
      'Motor wash G15 alu.jpeg'
    ];

    const basePath = '/GBPICS/Washing Machine spare pic/Motor/Wash Motor';
    const imageObjects = testImages.map(filename =>
      createImageObject(basePath, filename)
    );

    // Test each image
    const testPromises = imageObjects.map(async (imageObj) => {
      try {
        const response = await fetch(imageObj.path, { method: 'HEAD' });
        return {
          ...imageObj,
          status: response.ok ? 'success' : 'failed',
          statusCode: response.status
        };
      } catch (error) {
        return {
          ...imageObj,
          status: 'error',
          error: error.message
        };
      }
    });

    Promise.all(testPromises).then(setTestResults);

    // Comprehensive test of all product categories
    const comprehensiveTests = [
      {
        category: 'Wash Motor',
        basePath: '/GBPICS/Washing Machine spare pic/Motor/Wash Motor',
        samples: ['Motor wash 06 copper.jpeg', 'Motor wash 07 sealed.jpeg', 'Motor LG wash 06 .jpeg']
      },
      {
        category: 'Spin Motor',
        basePath: '/GBPICS/Washing Machine spare pic/Motor/Spin Motor',
        samples: ['Motor spin 01 copper.jpeg', 'Motor spin 02 sealed.jpeg', 'Motor spin 03 .jpeg']
      },
      {
        category: 'Door Lock',
        basePath: '/GBPICS/Washing Machine spare pic/Door Lock',
        samples: ['Door Lock for LG.jpeg', 'Black Big Door lock for LG.jpeg', 'White Door Lock for LG.jpeg']
      },
      {
        category: 'Gear Box Raja',
        basePath: '/GBPICS/Washing Machine spare pic/Gearbox-RAJA',
        samples: ['gearbox01raja.jpeg', 'gearbox02raja.jpeg', 'gearbox07raja.jpeg']
      },
      {
        category: 'Magnetron',
        basePath: '/GBPICS/Microwave spare pic/Magnetron',
        samples: ['Magnetron 210 witol.jpeg', 'Magnetron 213 witol.jpeg', 'Magnetron 214.jpeg']
      }
    ];

    const runComprehensiveTest = async () => {
      const results = [];
      for (const test of comprehensiveTests) {
        for (const sample of test.samples) {
          const imageObj = createImageObject(test.basePath, sample);
          try {
            const response = await fetch(imageObj.path, { method: 'HEAD' });
            results.push({
              category: test.category,
              filename: sample,
              primaryPath: imageObj.path,
              primaryWorks: response.ok,
              alternativePath: imageObj.alternativePath,
              alternativeWorks: false // Will test separately
            });
          } catch (error) {
            results.push({
              category: test.category,
              filename: sample,
              primaryPath: imageObj.path,
              primaryWorks: false,
              alternativePath: imageObj.alternativePath,
              alternativeWorks: false,
              error: error.message
            });
          }
        }
      }
      setComprehensiveTest(results);
    };

    runComprehensiveTest();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Image Loading Test</h1>

      {/* Simple Test Section */}
      {simpleTest && (
        <div className="mb-8 p-4 bg-yellow-50 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Simple Path Test</h2>
          <div className="space-y-4">
            <div>
              <p><strong>Original:</strong> <code className="text-sm bg-gray-100 p-1 rounded">{simpleTest.original}</code></p>
              <img src={simpleTest.original} alt="Original path test" className="w-32 h-32 object-cover border mt-2" onError={(e) => e.target.style.border = '2px solid red'} />
            </div>
            <div>
              <p><strong>Encoded:</strong> <code className="text-sm bg-gray-100 p-1 rounded">{simpleTest.encoded}</code></p>
              <img src={simpleTest.encoded} alt="Encoded path test" className="w-32 h-32 object-cover border mt-2" onError={(e) => e.target.style.border = '2px solid red'} />
            </div>
            <div>
              <p><strong>Manual:</strong> <code className="text-sm bg-gray-100 p-1 rounded">{simpleTest.manual}</code></p>
              <img src={simpleTest.manual} alt="Manual path test" className="w-32 h-32 object-cover border mt-2" onError={(e) => e.target.style.border = '2px solid red'} />
            </div>
            <div>
              <p><strong>Symlink:</strong> <code className="text-sm bg-gray-100 p-1 rounded">{simpleTest.symlink}</code></p>
              <img src={simpleTest.symlink} alt="Symlink path test" className="w-32 h-32 object-cover border mt-2" onError={(e) => e.target.style.border = '2px solid red'} />
            </div>
          </div>
        </div>
      )}

      <div className="space-y-6">
        {testResults.map((result, index) => (
          <div key={index} className="border rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2">{result.name}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p><strong>Path:</strong> <code className="text-sm bg-gray-100 p-1 rounded">{result.path}</code></p>
                <p><strong>Status:</strong> 
                  <span className={`ml-2 px-2 py-1 rounded text-sm ${
                    result.status === 'success' ? 'bg-green-100 text-green-800' :
                    result.status === 'failed' ? 'bg-red-100 text-red-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {result.status} {result.statusCode && `(${result.statusCode})`}
                  </span>
                </p>
                {result.error && <p><strong>Error:</strong> {result.error}</p>}
              </div>
              <div>
                {result.status === 'success' ? (
                  <img 
                    src={result.path} 
                    alt={result.name}
                    className="w-32 h-32 object-cover rounded border"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                ) : null}
                <div className="w-32 h-32 bg-gray-200 rounded border flex items-center justify-center text-gray-500 text-sm" style={{display: 'none'}}>
                  Failed to load
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Comprehensive Test Results */}
      {comprehensiveTest.length > 0 && (
        <div className="mt-8 p-4 bg-green-50 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Comprehensive Image Test Results</h3>
          <div className="space-y-4">
            {comprehensiveTest.map((result, index) => (
              <div key={index} className="border rounded p-3 bg-white">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium">{result.category} - {result.filename}</h4>
                  <span className={`px-2 py-1 rounded text-sm ${
                    result.primaryWorks ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {result.primaryWorks ? 'Working' : 'Failed'}
                  </span>
                </div>
                <div className="text-sm space-y-1">
                  <div>
                    <strong>Primary:</strong>
                    <code className="ml-2 text-xs bg-gray-100 p-1 rounded">{result.primaryPath}</code>
                  </div>
                  <div>
                    <strong>Alternative:</strong>
                    <code className="ml-2 text-xs bg-gray-100 p-1 rounded">{result.alternativePath}</code>
                  </div>
                  {result.error && (
                    <div className="text-red-600">
                      <strong>Error:</strong> {result.error}
                    </div>
                  )}
                </div>
                {result.primaryWorks && (
                  <div className="mt-2">
                    <img
                      src={result.primaryPath}
                      alt={result.filename}
                      className="w-20 h-20 object-cover rounded border"
                      onError={(e) => e.target.style.display = 'none'}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Direct Test Links</h3>
        <div className="space-y-2">
          <a
            href="/GBPICS/Washing%20Machine%20spare%20pic/Motor/Wash%20Motor/Motor%20wash%2006%20copper.jpeg"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-blue-600 hover:underline"
          >
            Test Direct Image Link 1
          </a>
          <a
            href="/GBPICS/Washing Machine spare pic/Motor/Wash Motor/Motor wash 06 copper.jpeg"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-blue-600 hover:underline"
          >
            Test Direct Image Link 2 (unencoded)
          </a>
        </div>
      </div>
    </div>
  );
}
