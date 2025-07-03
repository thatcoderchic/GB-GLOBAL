#!/bin/bash

# GB Global Image Fix Script
echo "🔧 GB Global Image Fix Script"
echo "=============================="

# Navigate to project directory
cd /Users/gayanbenipal/Desktop/project/public

# Check if GBPICS directory exists
if [ ! -d "GBPICS" ]; then
    echo "❌ GBPICS directory not found!"
    echo "Please upload your images to public/GBPICS/ first"
    exit 1
fi

echo "📁 Checking GBPICS directory structure..."

# Function to check and fix permissions
fix_permissions() {
    echo "🔒 Fixing file permissions..."
    find GBPICS -type f -name "*.jpeg" -exec chmod 644 {} \;
    find GBPICS -type f -name "*.jpg" -exec chmod 644 {} \;
    find GBPICS -type f -name "*.png" -exec chmod 644 {} \;
    find GBPICS -type d -exec chmod 755 {} \;
    echo "✅ Permissions fixed"
}

# Function to remove problematic files
clean_files() {
    echo "🧹 Cleaning problematic files..."
    find GBPICS -name ".DS_Store" -delete
    find GBPICS -name "Thumbs.db" -delete
    find GBPICS -name "*.tmp" -delete
    echo "✅ Cleaned system files"
}

# Function to check for missing directories
check_structure() {
    echo "📂 Checking directory structure..."
    
    required_dirs=(
        "GBPICS/Washing Machine spare pic/Motor/Wash Motor"
        "GBPICS/Washing Machine spare pic/Motor/Spin Motor"
        "GBPICS/Washing Machine spare pic/Door Lock"
        "GBPICS/Washing Machine spare pic/Gearbox-RAJA"
        "GBPICS/Washing Machine spare pic/Drain Motor"
        "GBPICS/Washing Machine spare pic/Inlet Valve"
        "GBPICS/Washing Machine spare pic/Timer"
        "GBPICS/Washing Machine spare pic/Pressure Switch"
        "GBPICS/Microwave spare pic/Magnetron"
        "GBPICS/Microwave spare pic/Transformer"
        "GBPICS/Microwave spare pic/Glass Tray"
        "GBPICS/Car washer/Washer"
        "GBPICS/Car washer/Adopter "
        "GBPICS/Car washer/Pipe"
        "GBPICS/Car washer/Washer Filter"
        "GBPICS/Car washer/Washer Gun"
        "GBPICS/Car washer/Washer Switch"
    )
    
    for dir in "${required_dirs[@]}"; do
        if [ ! -d "$dir" ]; then
            echo "⚠️  Missing directory: $dir"
            mkdir -p "$dir"
            echo "✅ Created: $dir"
        fi
    done
}

# Function to create symlink backup
create_backup() {
    echo "🔗 Creating backup symlink..."
    if [ -L "gbpics-test" ]; then
        rm gbpics-test
    fi
    ln -s "GBPICS/Washing Machine spare pic" gbpics-test
    echo "✅ Backup symlink created"
}

# Function to count images
count_images() {
    echo "📊 Image count summary:"
    echo "Wash Motor: $(find "GBPICS/Washing Machine spare pic/Motor/Wash Motor" -name "*.jpeg" 2>/dev/null | wc -l) images"
    echo "Spin Motor: $(find "GBPICS/Washing Machine spare pic/Motor/Spin Motor" -name "*.jpeg" 2>/dev/null | wc -l) images"
    echo "Door Lock: $(find "GBPICS/Washing Machine spare pic/Door Lock" -name "*.jpeg" 2>/dev/null | wc -l) images"
    echo "Gear Box Raja: $(find "GBPICS/Washing Machine spare pic/Gearbox-RAJA" -name "*.jpeg" 2>/dev/null | wc -l) images"
    echo "Magnetron: $(find "GBPICS/Microwave spare pic/Magnetron" -name "*.jpeg" 2>/dev/null | wc -l) images"
    echo "Total images: $(find GBPICS -name "*.jpeg" 2>/dev/null | wc -l)"
}

# Run all fixes
echo "🚀 Starting image fix process..."
check_structure
clean_files
fix_permissions
create_backup
count_images

echo ""
echo "✅ Image fix process completed!"
echo ""
echo "📋 Next steps:"
echo "1. If image counts are 0, please upload your images to the GBPICS folder"
echo "2. Restart your development server: npm run dev"
echo "3. Test the website: http://localhost:5173"
echo "4. Check image test page: http://localhost:5173/image-test"
echo ""
echo "🔍 If images still don't show:"
echo "1. Check browser console for errors"
echo "2. Verify image file names match exactly"
echo "3. Ensure no special characters in filenames"
