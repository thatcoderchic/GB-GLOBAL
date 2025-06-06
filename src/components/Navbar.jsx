import { Fragment, useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Bars3Icon, XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import logo from '../assets/GB_global_logo_withoutbg.png';



const categories = {
  'Washing Machine': [
    {
      name: 'Spin Motor',
      id: 'spin-motor',
      customLink: '/spin-motor',
      subItems: [
        { name: 'Motor G20 suitable for woi 11 kg', id: 'motor-g20-woi-11kg', image: '/GBPICS/Washing Machine spare pic/Motor/Spin Motor/Motor G20 suitable for woi 11 kg.jpeg' },
        { name: 'Motor spin 01', id: 'motor-spin-01', image: '/GBPICS/Washing Machine spare pic/Motor/Spin Motor/Motor spin 01 jpeg.jpeg' },
        { name: 'Motor spin 01 sealed', id: 'motor-spin-01-sealed', image: '/GBPICS/Washing Machine spare pic/Motor/Spin Motor/Motor spin 01 sealed.jpeg' },
        { name: 'Motor spin 02', id: 'motor-spin-02', image: '/GBPICS/Washing Machine spare pic/Motor/Spin Motor/Motor spin 02 .jpeg' },
        { name: 'Motor spin 02 sealed', id: 'motor-spin-02-sealed', image: '/GBPICS/Washing Machine spare pic/Motor/Spin Motor/Motor spin 02 sealed.jpeg' },
        { name: 'Motor spin 03', id: 'motor-spin-03', image: '/GBPICS/Washing Machine spare pic/Motor/Spin Motor/Motor spin 03 .jpeg' },
        { name: 'Motor spin 03 sealed', id: 'motor-spin-03-sealed', image: '/GBPICS/Washing Machine spare pic/Motor/Spin Motor/Motor spin 03 selaed.jpeg' },
        { name: 'Motor spin 04', id: 'motor-spin-04', image: '/GBPICS/Washing Machine spare pic/Motor/Spin Motor/Motor spin 04 .jpeg' },
        { name: 'Motor spin 04 sealed', id: 'motor-spin-04-sealed', image: '/GBPICS/Washing Machine spare pic/Motor/Spin Motor/Motor spin 04 sealed.jpeg' },
        { name: 'Motor spin 05', id: 'motor-spin-05', image: '/GBPICS/Washing Machine spare pic/Motor/Spin Motor/Motor spin 05 .jpeg' },
        { name: 'Motor spin 05 sealed', id: 'motor-spin-05-sealed', image: '/GBPICS/Washing Machine spare pic/Motor/Spin Motor/Motor spin 05 sealed.jpeg' },
        { name: 'Motor spin 11 sealed', id: 'motor-spin-11-sealed', image: '/GBPICS/Washing Machine spare pic/Motor/Spin Motor/Motor spin 11 sealed.jpeg' },
        { name: 'Motor spin G11 suitable for LG 9 kg', id: 'motor-spin-g11-lg-9kg', image: '/GBPICS/Washing Machine spare pic/Motor/Spin Motor/Motor spin G11 suitable for LG 9 kg.jpeg' },
        { name: 'Motor spin multi 14', id: 'motor-spin-multi-14', image: '/GBPICS/Washing Machine spare pic/Motor/Spin Motor/Motor spin multi 14 .jpeg' },
        { name: 'Motor spin multi 14 sealed', id: 'motor-spin-multi-14-sealed', image: '/GBPICS/Washing Machine spare pic/Motor/Spin Motor/Motor spin multi 14 sealed.jpeg' },
      ]
    },
    {
      name: 'Wash Motor',
      id: 'wash-motor',
      customLink: '/wash-motor',
      subItems: [
        { name: 'Motor LG wash 06 sealed', id: 'motor-lg-wash-06-sealed', image: '/GBPICS/Washing Machine spare pic/Motor/Wash Motor/Motor  LG wash 06 sealed.jpeg' },
        { name: 'Motor VCOON wash 08 sealed', id: 'motor-vcoon-wash-08-sealed', image: '/GBPICS/Washing Machine spare pic/Motor/Wash Motor/Motor  VCOON wash 08 selaed.jpeg' },
        { name: 'Motor G19 suitable for LG 9 kg WASH', id: 'motor-g19-lg-9kg-wash', image: '/GBPICS/Washing Machine spare pic/Motor/Wash Motor/Motor G19 suitable for LG 9 kg WASH.jpeg' },
        { name: 'Motor LG wash 06', id: 'motor-lg-wash-06', image: '/GBPICS/Washing Machine spare pic/Motor/Wash Motor/Motor LG wash 06 .jpeg' },
        { name: 'Motor Moti Shaft wash 09', id: 'motor-moti-shaft-wash-09', image: '/GBPICS/Washing Machine spare pic/Motor/Wash Motor/Motor Moti Shaft  wash 09.jpeg' },
        { name: 'Motor Moti Shaft wash 09 sealed', id: 'motor-moti-shaft-wash-09-sealed', image: '/GBPICS/Washing Machine spare pic/Motor/Wash Motor/Motor Moti Shaft wash 09 sealed.jpeg' },
        { name: 'Motor SS Churi wash 12', id: 'motor-ss-churi-wash-12', image: '/GBPICS/Washing Machine spare pic/Motor/Wash Motor/Motor SS Churi wash 12 .jpeg' },
        { name: 'Motor SS wash 07', id: 'motor-ss-wash-07', image: '/GBPICS/Washing Machine spare pic/Motor/Wash Motor/Motor SS wash 07 .jpeg' },
        { name: 'Motor SS wash 07 sealed', id: 'motor-ss-wash-07-sealed', image: '/GBPICS/Washing Machine spare pic/Motor/Wash Motor/Motor SS wash 07 sealed.jpeg' },
        { name: 'Motor VCOON wash 08 copper', id: 'motor-vcoon-wash-08-copper', image: '/GBPICS/Washing Machine spare pic/Motor/Wash Motor/Motor VCOON wash 08 copper.jpeg' },
        { name: 'Motor WPOOL wash 10 copper', id: 'motor-wpool-wash-10-copper', image: '/GBPICS/Washing Machine spare pic/Motor/Wash Motor/Motor WPOOL wash 10 copper.jpeg' },
        { name: 'Motor WPOOL wash 10 sealed', id: 'motor-wpool-wash-10-sealed', image: '/GBPICS/Washing Machine spare pic/Motor/Wash Motor/Motor WPOOL wash 10 sealed.jpeg' },
        { name: 'Motor wash G15 LG Top Load', id: 'motor-wash-g15-lg-top-load', image: '/GBPICS/Washing Machine spare pic/Motor/Wash Motor/Motor wash G15 LG Top Load jpeg.jpeg' },
        { name: 'Motor wash G16 SS Top Load', id: 'motor-wash-g16-ss-top-load', image: '/GBPICS/Washing Machine spare pic/Motor/Wash Motor/Motor wash G16 SS Top Load.jpeg' },
        { name: 'Motor wash G21 suitable for panasonic', id: 'motor-wash-g21-panasonic', image: '/GBPICS/Washing Machine spare pic/Motor/Wash Motor/Motor wash G21 suitable for panasonic.jpeg' },
      ]
    },
    {
      name: 'Gear Box RAJA',
      id: 'gear-box-raja',
      customLink: '/gearbox-raja',
      subItems: [
        { name: 'GEAR BOX 26 RAJA', id: 'gear-box-26-raja', image: '/GBPICS/Washing Machine spare pic/Gear Box/Gearbox-RAJA/GEAR BOX 26 RAJA.jpeg' },
        { name: 'Gear box 026 BIG PULLY 6800 RAJA', id: 'gear-box-026-big-pully-6800-raja', image: '/GBPICS/Washing Machine spare pic/Gear Box/Gearbox-RAJA/Gear box 026 BIG PULLY 6800 RAJA.jpeg' },
        { name: 'GearBox 01 raja', id: 'gearbox-01-raja', image: '/GBPICS/Washing Machine spare pic/Gear Box/Gearbox-RAJA/GearBox_01_raja.jpeg' },
        { name: 'gearbox02raja', id: 'gearbox-02-raja', image: '/GBPICS/Washing Machine spare pic/Gear Box/Gearbox-RAJA/gearbox02raja.jpeg' },
        { name: 'gearbox07raja', id: 'gearbox-07-raja', image: '/GBPICS/Washing Machine spare pic/Gear Box/Gearbox-RAJA/gearbox07raja.jpeg' },
        { name: 'gearbox08raja', id: 'gearbox-08-raja', image: '/GBPICS/Washing Machine spare pic/Gear Box/Gearbox-RAJA/gearbox08raja.jpeg' },
        { name: 'gearbox09raja', id: 'gearbox-09-raja', image: '/GBPICS/Washing Machine spare pic/Gear Box/Gearbox-RAJA/gearbox09raja.jpeg' },
        { name: 'gearbox10raja', id: 'gearbox-10-raja', image: '/GBPICS/Washing Machine spare pic/Gear Box/Gearbox-RAJA/gearbox10raja.jpeg' },
        { name: 'gearbox11raja', id: 'gearbox-11-raja', image: '/GBPICS/Washing Machine spare pic/Gear Box/Gearbox-RAJA/gearbox11raja.jpeg' },
        { name: 'gearbox12raja', id: 'gearbox-12-raja', image: '/GBPICS/Washing Machine spare pic/Gear Box/Gearbox-RAJA/gearbox12raja.jpeg' },
        { name: 'gearbox13raja', id: 'gearbox-13-raja', image: '/GBPICS/Washing Machine spare pic/Gear Box/Gearbox-RAJA/gearbox13raja.jpeg' },
        { name: 'gearbox14raja', id: 'gearbox-14-raja', image: '/GBPICS/Washing Machine spare pic/Gear Box/Gearbox-RAJA/gearbox14raja.jpeg' },
        { name: 'gearbox16raja', id: 'gearbox-16-raja', image: '/GBPICS/Washing Machine spare pic/Gear Box/Gearbox-RAJA/gearbox16raja.jpeg' },
        { name: 'gearbox17raja', id: 'gearbox-17-raja', image: '/GBPICS/Washing Machine spare pic/Gear Box/Gearbox-RAJA/gearbox17raja.jpeg' },
        { name: 'gearbox18raja', id: 'gearbox-18-raja', image: '/GBPICS/Washing Machine spare pic/Gear Box/Gearbox-RAJA/gearbox18raja.jpeg' },
        { name: 'gearbox21raja', id: 'gearbox-21-raja', image: '/GBPICS/Washing Machine spare pic/Gear Box/Gearbox-RAJA/gearbox21raja.jpeg' },
        { name: 'gearbox22nraja', id: 'gearbox-22n-raja', image: '/GBPICS/Washing Machine spare pic/Gear Box/Gearbox-RAJA/gearbox22nraja.jpeg' },
        { name: 'gearbox22raja', id: 'gearbox-22-raja', image: '/GBPICS/Washing Machine spare pic/Gear Box/Gearbox-RAJA/gearbox22raja.jpeg' },
        { name: 'gearbox23raja', id: 'gearbox-23-raja', image: '/GBPICS/Washing Machine spare pic/Gear Box/Gearbox-RAJA/gearbox23raja.jpeg' },
        { name: 'gearbox25raja', id: 'gearbox-25-raja', image: '/GBPICS/Washing Machine spare pic/Gear Box/Gearbox-RAJA/gearbox25raja.jpeg' },
        { name: 'gearbox27raja', id: 'gearbox-27-raja', image: '/GBPICS/Washing Machine spare pic/Gear Box/Gearbox-RAJA/gearbox27raja.jpeg' },
        { name: 'gearbox28raja', id: 'gearbox-28-raja', image: '/GBPICS/Washing Machine spare pic/Gear Box/Gearbox-RAJA/gearbox28raja.jpeg' },
        { name: 'gearbox31raja', id: 'gearbox-31-raja', image: '/GBPICS/Washing Machine spare pic/Gear Box/Gearbox-RAJA/gearbox31raja.jpeg' },
        { name: 'gearbox32raja', id: 'gearbox-32-raja', image: '/GBPICS/Washing Machine spare pic/Gear Box/Gearbox-RAJA/gearbox32raja.jpeg' },
        { name: 'gearbox33raja', id: 'gearbox-33-raja', image: '/GBPICS/Washing Machine spare pic/Gear Box/Gearbox-RAJA/gearbox33raja.jpeg' },
        { name: 'gearbox34raja', id: 'gearbox-34-raja', image: '/GBPICS/Washing Machine spare pic/Gear Box/Gearbox-RAJA/gearbox34raja.jpeg' },
        { name: 'gearbox35raja', id: 'gearbox-35-raja', image: '/GBPICS/Washing Machine spare pic/Gear Box/Gearbox-RAJA/gearbox35raja.jpeg' },
        { name: 'gearbox36raja', id: 'gearbox-36-raja', image: '/GBPICS/Washing Machine spare pic/Gear Box/Gearbox-RAJA/gearbox36raja.jpeg' },
        { name: 'gearbox41raja', id: 'gearbox-41-raja', image: '/GBPICS/Washing Machine spare pic/Gear Box/Gearbox-RAJA/gearbox41raja.jpeg' },
      ]
    },
    {
      name: 'Gear Box Xindi',
      id: 'gear-box-xindi',
      customLink: '/gear-box-xindi',
      subItems: [
        { name: 'Gear box 01 xinde', id: 'gear-box-01-xinde', image: '/GBPICS/Washing Machine spare pic/Gear Box/Gearbox-Xinde/Gear box 01 xinde.jpeg' },
        { name: 'Gear box 02 xinde', id: 'gear-box-02-xinde', image: '/GBPICS/Washing Machine spare pic/Gear Box/Gearbox-Xinde/Gear box 02 xinde.jpeg' },
        { name: 'Gear box 07 xinde', id: 'gear-box-07-xinde', image: '/GBPICS/Washing Machine spare pic/Gear Box/Gearbox-Xinde/Gear box 07 xinde.jpeg' },
        { name: 'Gear box 08 xinde', id: 'gear-box-08-xinde', image: '/GBPICS/Washing Machine spare pic/Gear Box/Gearbox-Xinde/Gear box 08 xinde.jpeg' },
        { name: 'Gear box 11 xinde', id: 'gear-box-11-xinde', image: '/GBPICS/Washing Machine spare pic/Gear Box/Gearbox-Xinde/Gear box 11 xinde.jpeg' },
        { name: 'Gear box 13 xinde', id: 'gear-box-13-xinde', image: '/GBPICS/Washing Machine spare pic/Gear Box/Gearbox-Xinde/Gear box 13 xinde.jpeg' },
        { name: 'Gear box 16 xinde', id: 'gear-box-16-xinde', image: '/GBPICS/Washing Machine spare pic/Gear Box/Gearbox-Xinde/Gear box 16 xinde.jpeg' },
        { name: 'Gear box 17 xinde', id: 'gear-box-17-xinde', image: '/GBPICS/Washing Machine spare pic/Gear Box/Gearbox-Xinde/Gear box 17 xinde.jpeg' },
        { name: 'Gear box 18 xinde', id: 'gear-box-18-xinde', image: '/GBPICS/Washing Machine spare pic/Gear Box/Gearbox-Xinde/Gear box 18 xinde.jpeg' },
        { name: 'Gear box 21 xinde', id: 'gear-box-21-xinde', image: '/GBPICS/Washing Machine spare pic/Gear Box/Gearbox-Xinde/Gear box 21 xinde.jpeg' },
        { name: 'Gear box 21SQ xinde', id: 'gear-box-21sq-xinde', image: '/GBPICS/Washing Machine spare pic/Gear Box/Gearbox-Xinde/Gear box 21SQ xinde.jpeg' },
        { name: 'Gear box 22 xinde', id: 'gear-box-22-xinde', image: '/GBPICS/Washing Machine spare pic/Gear Box/Gearbox-Xinde/Gear box 22 xinde.jpeg' },
        { name: 'Gear box 22N xinde', id: 'gear-box-22n-xinde', image: '/GBPICS/Washing Machine spare pic/Gear Box/Gearbox-Xinde/Gear box 22N xinde.jpeg' },
        { name: 'Gear box 23 xinde', id: 'gear-box-23-xinde', image: '/GBPICS/Washing Machine spare pic/Gear Box/Gearbox-Xinde/Gear box 23 xinde.jpeg' },
        { name: 'Gear box 25 xinde', id: 'gear-box-25-xinde', image: '/GBPICS/Washing Machine spare pic/Gear Box/Gearbox-Xinde/Gear box 25 xinde.jpeg' },
        { name: 'Gear box 26 (6800) xinde', id: 'gear-box-26-6800-xinde', image: '/GBPICS/Washing Machine spare pic/Gear Box/Gearbox-Xinde/Gear box 26 (6800) xinde.jpeg' },
        { name: 'Gear box 32 xinde', id: 'gear-box-32-xinde', image: '/GBPICS/Washing Machine spare pic/Gear Box/Gearbox-Xinde/Gear box 32 xinde.jpeg' },
        { name: 'Gear box 33 xinde', id: 'gear-box-33-xinde', image: '/GBPICS/Washing Machine spare pic/Gear Box/Gearbox-Xinde/Gear box 33 xinde.jpeg' },
        { name: 'Gear box 34 xinde', id: 'gear-box-34-xinde', image: '/GBPICS/Washing Machine spare pic/Gear Box/Gearbox-Xinde/Gear box 34 xinde.jpeg' },
        { name: 'Gear box 35 xinde', id: 'gear-box-35-xinde', image: '/GBPICS/Washing Machine spare pic/Gear Box/Gearbox-Xinde/Gear box 35 xinde.jpeg' },
        { name: 'Gear box 41 xinde', id: 'gear-box-41-xinde', image: '/GBPICS/Washing Machine spare pic/Gear Box/Gearbox-Xinde/Gear box 41 xinde.jpeg' },
        { name: 'Gear box 43 xinde', id: 'gear-box-43-xinde', image: '/GBPICS/Washing Machine spare pic/Gear Box/Gearbox-Xinde/Gear box 43 xinde.jpeg' },
        { name: 'Gear box 49 xinde', id: 'gear-box-49-xinde', image: '/GBPICS/Washing Machine spare pic/Gear Box/Gearbox-Xinde/Gear box 49 xinde.jpeg' },
        { name: 'Gear box 50 xinde', id: 'gear-box-50-xinde', image: '/GBPICS/Washing Machine spare pic/Gear Box/Gearbox-Xinde/Gear box 50 xinde.jpeg' },
        { name: 'Gear box 51 xinde', id: 'gear-box-51-xinde', image: '/GBPICS/Washing Machine spare pic/Gear Box/Gearbox-Xinde/Gear box 51 xinde.jpeg' },
        { name: 'Gear box 56 xinde', id: 'gear-box-56-xinde', image: '/GBPICS/Washing Machine spare pic/Gear Box/Gearbox-Xinde/Gear box 56 xinde.jpeg' },
        { name: 'Gear box 59 xinde', id: 'gear-box-59-xinde', image: '/GBPICS/Washing Machine spare pic/Gear Box/Gearbox-Xinde/Gear box 59 xinde.jpeg' },
        { name: 'Gear box 60 xinde', id: 'gear-box-60-xinde', image: '/GBPICS/Washing Machine spare pic/Gear Box/Gearbox-Xinde/Gear box 60 xinde.jpeg' },
        { name: 'Gear box 61 xinde', id: 'gear-box-61-xinde', image: '/GBPICS/Washing Machine spare pic/Gear Box/Gearbox-Xinde/Gear box 61 xinde.jpeg' },
      ]
    },
    {
      name: 'Door Lock',
      id: 'door-lock',
      customLink: '/door-lock',
      subItems: [
        { name: 'Black Big Door lock for LG', id: 'black-big-door-lock-lg', image: '/GBPICS/Washing Machine spare pic/Door Lock/Black Big Door lock for LG.jpeg' },
        { name: 'Door Lock IFB', id: 'door-lock-ifb', image: '/GBPICS/Washing Machine spare pic/Door Lock/Door Lock IFB.jpeg' },
        { name: 'Door Lock for LG', id: 'door-lock-lg', image: '/GBPICS/Washing Machine spare pic/Door Lock/Door Lock for LG.jpeg' },
        { name: 'Door Lock for SS', id: 'door-lock-ss', image: '/GBPICS/Washing Machine spare pic/Door Lock/Door Lock for SS.jpeg' },
        { name: 'Door Lock for LG (variant)', id: 'door-lock-lg-variant', image: '/GBPICS/Washing Machine spare pic/Door Lock/Door_Lock for LG.jpeg' },
        { name: 'Door Lock for LG (variant 2)', id: 'door-lock-lg-variant-2', image: '/GBPICS/Washing Machine spare pic/Door Lock/Door_Lock_for_LG.jpeg' },
        { name: 'Red Dori Door lock for LG', id: 'red-dori-door-lock-lg', image: '/GBPICS/Washing Machine spare pic/Door Lock/Red Dori Door lock for LG.jpeg' },
        { name: 'White Door Lock for LG', id: 'white-door-lock-lg', image: '/GBPICS/Washing Machine spare pic/Door Lock/White Door Lock for LG.jpeg' },
      ]
    },
    {
      name: 'Timer',
      id: 'timer',
      customLink: '/timer',
      subItems: [
        { name: 'LG 10 min', id: 'lg-10-min', image: '/GBPICS/Washing Machine spare pic/Timer/ LG 10 min.jpeg' },
        { name: 'haier 35 min 8 wire', id: 'haier-35-min-8-wire', image: '/GBPICS/Washing Machine spare pic/Timer/ haier 35 min 8 wire.jpeg' },
        { name: 'haier 4 pin 35 min', id: 'haier-4-pin-35-min', image: '/GBPICS/Washing Machine spare pic/Timer/ haier 4 pin 35 min.jpeg' },
        { name: 'onida 6084 35 min 7 wire', id: 'onida-6084-35-min-7-wire', image: '/GBPICS/Washing Machine spare pic/Timer/ onida 6084 35 min 7 wire.jpeg' },
        { name: 'samsung 35 min 4 wire', id: 'samsung-35-min-4-wire', image: '/GBPICS/Washing Machine spare pic/Timer/ samsung 35 min 4 wire.jpeg' },
        { name: 'vcon 35 min 4 wire 6049', id: 'vcon-35-min-4-wire-6049', image: '/GBPICS/Washing Machine spare pic/Timer/ vcon 35 min 4 wire 6049.jpeg' },
        { name: '6009 LG 15 min', id: '6009-lg-15-min', image: '/GBPICS/Washing Machine spare pic/Timer/6009 LG 15 min.jpeg' },
        { name: 'Drain selector suitable for EKL', id: 'drain-selector-ekl', image: '/GBPICS/Washing Machine spare pic/Timer/Drain selector suitable for EKL.jpeg' },
        { name: 'Drain selector suitable for onida', id: 'drain-selector-onida', image: '/GBPICS/Washing Machine spare pic/Timer/Drain selector suitable for onida .jpeg' },
        { name: 'GOD 35 min 6 wire', id: 'god-35-min-6-wire', image: '/GBPICS/Washing Machine spare pic/Timer/GOD 35 min 6 wire.jpeg' },
        { name: 'LG 41.5 min', id: 'lg-41-5-min', image: '/GBPICS/Washing Machine spare pic/Timer/LG 41.5 min.jpeg' },
        { name: 'LG 5 min', id: 'lg-5-min', image: '/GBPICS/Washing Machine spare pic/Timer/LG 5 min.jpeg' },
        { name: 'SS 15 min', id: 'ss-15-min', image: '/GBPICS/Washing Machine spare pic/Timer/SS 15 min.jpeg' },
        { name: 'SS 35 min 4 wire 6075', id: 'ss-35-min-4-wire-6075', image: '/GBPICS/Washing Machine spare pic/Timer/SS 35 min 4 wire 6075.jpeg' },
        { name: 'Samsung 15 min 7 wire', id: 'samsung-15-min-7-wire', image: '/GBPICS/Washing Machine spare pic/Timer/Samsung 15 min 7 wire.jpeg' },
        { name: 'Samsung 42 min', id: 'samsung-42-min', image: '/GBPICS/Washing Machine spare pic/Timer/Samsung 42 min.jpeg' },
        { name: 'Timer double LG', id: 'timer-double-lg', image: '/GBPICS/Washing Machine spare pic/Timer/Timer double LG.jpeg' },
        { name: 'Timer suitable for EKL 5 min', id: 'timer-ekl-5-min', image: '/GBPICS/Washing Machine spare pic/Timer/Timer suitable for EKL 5 min.jpeg' },
        { name: 'god 35 min 7 wire', id: 'god-35-min-7-wire', image: '/GBPICS/Washing Machine spare pic/Timer/god 35 min 7 wire.jpeg' },
        { name: 'haier 4 pin 15 min', id: 'haier-4-pin-15-min', image: '/GBPICS/Washing Machine spare pic/Timer/haier 4 pin 15 min.jpeg' },
        { name: 'timer LG', id: 'timer-lg', image: '/GBPICS/Washing Machine spare pic/Timer/timer_LG.jpeg' },
        { name: 'vcon 5 min', id: 'vcon-5-min', image: '/GBPICS/Washing Machine spare pic/Timer/vcon 5 min.jpeg' },
        { name: 'vcon 6005', id: 'vcon-6005', image: '/GBPICS/Washing Machine spare pic/Timer/vcon 6005.jpeg' },
        { name: 'vcon 6072', id: 'vcon-6072', image: '/GBPICS/Washing Machine spare pic/Timer/vcon 6072.jpeg' },
        { name: 'vcon 6080', id: 'vcon-6080', image: '/GBPICS/Washing Machine spare pic/Timer/vcon 6080.jpeg' },
        { name: 'w:pool 35 min 8 wire', id: 'wpool-35-min-8-wire', image: '/GBPICS/Washing Machine spare pic/Timer/w:pool 35 min 8 wire.jpeg' },
        { name: 'w:pool 35 min', id: 'wpool-35-min', image: '/GBPICS/Washing Machine spare pic/Timer/w:pool 35 min.jpeg' },
        { name: 'w:pool 5 min', id: 'wpool-5-min', image: '/GBPICS/Washing Machine spare pic/Timer/w:pool 5 min.jpeg' },
        { name: 'w:pool 6067', id: 'wpool-6067', image: '/GBPICS/Washing Machine spare pic/Timer/w:pool 6067.jpeg' },
      ]
    },
    { name: 'Clutch', id: 'clutch', customLink: '/clutch' },
    {
      name: 'Spin Bellow',
      id: 'spin-bellow',
      customLink: '/spin-bellow',
      subItems: [
        { name: 'Bellow suitable for 8700 models', id: 'bellow-8700-models', image: '/GBPICS/Washing Machine spare pic/Bellow/Bellow suitable for 8700 models.jpeg' },
        { name: 'Bellow suitable for LG 7 kg with ring', id: 'bellow-lg-7kg-ring', image: '/GBPICS/Washing Machine spare pic/Bellow/Bellow suitable for LG 7 kg with ring.jpeg' },
        { name: 'Bellow suitable for LG 9 kg', id: 'bellow-lg-9kg', image: '/GBPICS/Washing Machine spare pic/Bellow/Bellow suitable for LG 9 kg.jpeg' },
        { name: 'Bellow suitable for samsung 8 kg models', id: 'bellow-samsung-8kg', image: '/GBPICS/Washing Machine spare pic/Bellow/Bellow suitable for samsung 8 kg models.jpeg' },
        { name: 'Suitable bellow for small universal big bush', id: 'bellow-small-universal-big-bush', image: '/GBPICS/Washing Machine spare pic/Bellow/Suitable bellow for small universal big bush.jpeg' },
        { name: 'Suitable for all models multi bellow', id: 'bellow-all-models-multi', image: '/GBPICS/Washing Machine spare pic/Bellow/Suitable for all models multi bellow.jpeg' },
      ]
    },
    {
      name: 'Inlet Valve',
      id: 'inlet-valve',
      customLink: '/inlet-valve',
      subItems: [
        { name: 'Double Inlet Valve for SS', id: 'double-inlet-valve-ss', image: '/GBPICS/Washing Machine spare pic/Inlet Valve/ Double Inlet Valve for SS.jpeg' },
        { name: 'Blue Red Double DC Inlet Valve for LG', id: 'blue-red-double-dc-inlet-valve-lg', image: '/GBPICS/Washing Machine spare pic/Inlet Valve/Blue Red Double DC Inlet Valvue for LG.jpeg' },
        { name: 'Grey Single Inlet Valve for SS', id: 'grey-single-inlet-valve-ss', image: '/GBPICS/Washing Machine spare pic/Inlet Valve/Grey Single Inlet Valve for SS.jpeg' },
        { name: 'Inlet valve 3 coil DC suitable for LG', id: 'inlet-valve-3-coil-dc-lg', image: '/GBPICS/Washing Machine spare pic/Inlet Valve/Inlet valve 3 coil DC suitable for LG.jpeg' },
        { name: 'Inlet valve double coil DC suitable for LG', id: 'inlet-valve-double-coil-dc-lg', image: '/GBPICS/Washing Machine spare pic/Inlet Valve/Inlet valve double coil DC suitable for LG.jpeg' },
        { name: 'Inlet valve double suitable for LG', id: 'inlet-valve-double-lg', image: '/GBPICS/Washing Machine spare pic/Inlet Valve/Inlet valve double suitable for LG.jpeg' },
        { name: 'Inlet valve double suitable for bosch', id: 'inlet-valve-double-bosch', image: '/GBPICS/Washing Machine spare pic/Inlet Valve/Inlet valve double suitable for bosch.jpeg' },
        { name: 'Inlet valve single DC suitable for LG', id: 'inlet-valve-single-dc-lg', image: '/GBPICS/Washing Machine spare pic/Inlet Valve/Inlet valve single DC suitable for LG.jpeg' },
        { name: 'Inlet valve single suitable for LG', id: 'inlet-valve-single-lg', image: '/GBPICS/Washing Machine spare pic/Inlet Valve/Inlet valve single suitable for LG.jpeg' },
        { name: 'Inlet valve single suitable for samsung', id: 'inlet-valve-single-samsung', image: '/GBPICS/Washing Machine spare pic/Inlet Valve/Inlet valve single suitable for samsung.jpeg' },
        { name: 'Inlet valve single suitable for woi', id: 'inlet-valve-single-woi', image: '/GBPICS/Washing Machine spare pic/Inlet Valve/Inlet valve single suitable for woi.jpeg' },
        { name: 'Single DC 12V Inlet Valve for LG', id: 'single-dc-12v-inlet-valve-lg', image: '/GBPICS/Washing Machine spare pic/Inlet Valve/Single DC 12V Inlet Valve for LG.jpeg' },
        { name: 'Single DC 220V Inlet Valve for LG', id: 'single-dc-220v-inlet-valve-lg', image: '/GBPICS/Washing Machine spare pic/Inlet Valve/Single DC 220V Inlet Valve for LG.jpeg' },
        { name: 'Triple DC Inlet Valve for LG', id: 'triple-dc-inlet-valve-lg', image: '/GBPICS/Washing Machine spare pic/Inlet Valve/Triple DC Inlet Valve for LG.jpeg' },
        { name: 'Triple DC Inlet Valve for SS', id: 'triple-dc-inlet-valve-ss', image: '/GBPICS/Washing Machine spare pic/Inlet Valve/Triple DC Inlet Valve for SS.jpeg' },
        { name: 'Blue Single DC Inlet Valve for LG', id: 'blue-single-dc-inlet-valve-lg', image: '/GBPICS/Washing Machine spare pic/Door Lock/Blue Single DC Inlet Valve for LG.jpeg' },
        { name: 'Grey Double Long Inlet Valve for LG', id: 'grey-double-long-inlet-valve-lg', image: '/GBPICS/Washing Machine spare pic/Door Lock/Grey Double Long Inlet Valve for LG.jpeg' },
      ]
    },
    {
      name: 'Pressure Switch',
      id: 'pressure-switch',
      customLink: '/pressure-switch',
      subItems: [
        { name: 'Pressure sensor suitable for LG', id: 'pressure-sensor-lg', image: '/GBPICS/Washing Machine spare pic/Pressure Switch/Pressure sensor suitable for LG.jpeg' },
        { name: 'Pressure sensors suitable for Samsung', id: 'pressure-sensors-samsung', image: '/GBPICS/Washing Machine spare pic/Pressure Switch/Pressure sensors suitable for Samsung.jpeg' },
      ]
    },
    {
      name: 'Drain Motor',
      id: 'drain-motor',
      customLink: '/drain-motor',
      subItems: [
        { name: 'Drain motor black suitable for Samsung', id: 'drain-motor-black-samsung', image: '/GBPICS/Washing Machine spare pic/Drain Motor/Drain motor black suitable for Samsung.jpeg' },
        { name: 'Drain motor suitable for GOD', id: 'drain-motor-god', image: '/GBPICS/Washing Machine spare pic/Drain Motor/Drain motor suitable for GOD.jpeg' },
        { name: 'Drain motor suitable for IFB', id: 'drain-motor-ifb', image: '/GBPICS/Washing Machine spare pic/Drain Motor/Drain motor suitable for IFB.jpeg' },
        { name: 'Drain motor suitable for LG', id: 'drain-motor-lg', image: '/GBPICS/Washing Machine spare pic/Drain Motor/Drain motor suitable for LG.jpeg' },
        { name: 'Drain motor suitable for vcon', id: 'drain-motor-vcon', image: '/GBPICS/Washing Machine spare pic/Drain Motor/Drain motor suitable for vcon.jpeg' },
        { name: 'Drain motor suitable for w:pool', id: 'drain-motor-wpool', image: '/GBPICS/Washing Machine spare pic/Drain Motor/Drain motor suitable for w:pool.jpeg' },
        { name: 'Drain motor white suitable for Samsung', id: 'drain-motor-white-samsung', image: '/GBPICS/Washing Machine spare pic/Drain Motor/Drain motor white suitable for Samsung.jpeg' },
      ]
    },
  ],
  'Microwave': [
    {
      name: 'Magnetron',
      id: 'magnetron',
      customLink: '/magnetron',
      subItems: [
        { name: 'Magnetron 210 witol', id: 'magnetron-210-witol', image: '/GBPICS/Microwave spare pic/Magnetron/Magnetron 210 witol.jpeg' },
        { name: 'Magnetron 213 witol', id: 'magnetron-213-witol', image: '/GBPICS/Microwave spare pic/Magnetron/Magnetron 213 witol.jpeg' },
        { name: 'Magnetron 214', id: 'magnetron-214', image: '/GBPICS/Microwave spare pic/Magnetron/Magnetron 214.jpeg' },
        { name: 'Magnetron 240 gp', id: 'magnetron-240-gp', image: '/GBPICS/Microwave spare pic/Magnetron/Magnetron 240 gp.jpeg' },
        { name: 'Magnetron 610 witol', id: 'magnetron-610-witol', image: '/GBPICS/Microwave spare pic/Magnetron/Magnetron 610 witol.jpeg' },
        { name: 'Magnetron 610240 GP witol', id: 'magnetron-610240-gp-witol', image: '/GBPICS/Microwave spare pic/Magnetron/Magnetron 610240 GP witol.jpeg' },
        { name: 'Magnetron Suitable for w:pool', id: 'magnetron-wpool', image: '/GBPICS/Microwave spare pic/Magnetron/Magnetron Suitable for w:pool.jpeg' },
      ]
    },
    {
      name: 'Transformer',
      id: 'transformer',
      customLink: '/transformer',
      subItems: [
        { name: 'Micro Transformers', id: 'micro-transformers', image: '/GBPICS/Microwave spare pic/Transformer/Micro Transformers.jpeg' },
        { name: 'Micro transformer for oven micro', id: 'micro-transformer-oven', image: '/GBPICS/Microwave spare pic/Transformer/Micro transformer for oven micro.jpeg' },
      ]
    },
    {
      name: 'Glass Tray',
      id: 'glass-tray',
      customLink: '/glass-tray',
      subItems: [
        { name: 'Glass tray 12.5 inches', id: 'glass-tray-12-5-inches', image: '/GBPICS/Microwave spare pic/Glass Tray/Glass tray 12.5 inches.jpeg' },
        { name: 'Glass tray suitable for LG 9 inch plain', id: 'glass-tray-lg-9-inch', image: '/GBPICS/Microwave spare pic/Glass Tray/Glass tray suitable for LG 9 inchi plain.jpeg' },
        { name: 'Glass tray suitable for Samsung 10.5 inches', id: 'glass-tray-samsung-10-5-inches', image: '/GBPICS/Microwave spare pic/Glass Tray/Glass tray suitable for Samsung 10.5 inches.jpeg' },
      ]
    },
    { name: 'Fuse', id: 'fuse', customLink: '/fuse' },
  ],
  'Car Washer': [
    {
      name: 'Washer',
      id: 'washer',
      customLink: '/car-washer',
      subItems: [
        { name: "Car washer 2701", id: "car-washer-2701", image: "/GBPICS/Car washer/Washer/Car washer 2701.jpeg" },
        { name: "Car washer adjustable", id: "car-washer-adjustable", image: "/GBPICS/Car washer/Washer/Car washer adjustable.jpeg" },
        { name: "Car washer bullet", id: "car-washer-bullet", image: "/GBPICS/Car washer/Washer/Car washer bullet.jpeg" },
        { name: "Car washer raja", id: "car-washer-raja", image: "/GBPICS/Car washer/Washer/Car washer raja.jpeg" },
      ]
    },
    {
      name: 'Adopter',
      id: 'adopter',
      subItems: [
        { name: "Washer's clear adopter", id: "clear-adopter", image: "/GBPICS/Car washer/Adopter /Washer's clear adopter.jpeg" },
        { name: "Washer's quick adopter", id: "quick-adopter", image: "/GBPICS/Car washer/Adopter /Washer's quick adopter.jpeg" },
      ]
    },
    {
      name: 'Pipe',
      id: 'pipe',
      subItems: [
        { name: "Washer's pipe 05 mtr", id: "pipe-05mtr", image: "/GBPICS/Car washer/Pipe/Washer's pipe 05 mtr.jpeg" },
        { name: "Washer's pipe 08 mtr", id: "pipe-08mtr", image: "/GBPICS/Car washer/Pipe/Washer's pipe 08 mtr.jpeg" },
        { name: "Washer's pipe black heavy 07 mtr", id: "pipe-black-heavy-07mtr", image: "/GBPICS/Car washer/Pipe/Washer's pipe black heavy 07 mtr.jpeg" },
        { name: "Washer's pipe normal 05 mtr", id: "pipe-normal-05mtr", image: "/GBPICS/Car washer/Pipe/Washer's pipe normal 05 mtr.jpeg" },
        { name: "Washer's pipe small hole", id: "pipe-small-hole", image: "/GBPICS/Car washer/Pipe/Washer's pipe small hole.jpeg" },
      ]
    },
    {
      name: 'Washer Filter',
      id: 'washer-filter',
      subItems: [
        { name: "Washer's black filter", id: "washer-black-filter", image: "/GBPICS/Car washer/Washer Filter/Washer's black filter.jpeg" },
      ]
    },
    {
      name: 'Washer Gun',
      id: 'washer-gun',
      subItems: [
        { name: "Washer gun 360 plastic", id: "washer-gun-360-plastic", image: "/GBPICS/Car washer/Washer Gun/Washer gun 360 plastic.jpeg" },
        { name: "Washer gun", id: "washer-gun", image: "/GBPICS/Car washer/Washer Gun/Washer gun.jpeg" },
        { name: "Washer metal gun 360", id: "washer-metal-gun-360", image: "/GBPICS/Car washer/Washer Gun/Washer metal gun 360.jpeg" },
        { name: "Washer's gun small thread hole", id: "washer-gun-small-thread-hole", image: "/GBPICS/Car washer/Washer Gun/Washer's gun small thread hole.jpeg" },
      ]
    },
    {
      name: 'Washer Switch',
      id: 'washer-switch',
      subItems: [
        { name: "Washer's switch", id: "washer-switch", image: "/GBPICS/Car washer/Washer Switch/Washer's switch.jpeg" },
      ]
    },
  ],

};

// Search suggestions data
const searchSuggestions = [
  // Spin Motor products
  { name: 'Motor G20 suitable for woi 11 kg', category: 'washing-machine', id: 'motor-g20-woi-11kg' },
  { name: 'Motor spin 01', category: 'washing-machine', id: 'motor-spin-01' },
  { name: 'Motor spin 01 sealed', category: 'washing-machine', id: 'motor-spin-01-sealed' },
  { name: 'Motor spin 02', category: 'washing-machine', id: 'motor-spin-02' },
  { name: 'Motor spin 02 sealed', category: 'washing-machine', id: 'motor-spin-02-sealed' },
  { name: 'Motor spin 03', category: 'washing-machine', id: 'motor-spin-03' },
  { name: 'Motor spin 03 sealed', category: 'washing-machine', id: 'motor-spin-03-sealed' },
  { name: 'Motor spin 04', category: 'washing-machine', id: 'motor-spin-04' },
  { name: 'Motor spin 04 sealed', category: 'washing-machine', id: 'motor-spin-04-sealed' },
  { name: 'Motor spin 05', category: 'washing-machine', id: 'motor-spin-05' },
  { name: 'Motor spin 05 sealed', category: 'washing-machine', id: 'motor-spin-05-sealed' },
  { name: 'Motor spin 11 sealed', category: 'washing-machine', id: 'motor-spin-11-sealed' },
  { name: 'Motor spin G11 suitable for LG 9 kg', category: 'washing-machine', id: 'motor-spin-g11-lg-9kg' },
  { name: 'Motor spin multi 14', category: 'washing-machine', id: 'motor-spin-multi-14' },
  { name: 'Motor spin multi 14 sealed', category: 'washing-machine', id: 'motor-spin-multi-14-sealed' },
  { name: 'Spin Motor', category: 'washing-machine', id: 'spin-motor' },

  // Wash Motor products
  { name: 'Motor LG wash 06 sealed', category: 'washing-machine', id: 'motor-lg-wash-06-sealed' },
  { name: 'Motor VCOON wash 08 sealed', category: 'washing-machine', id: 'motor-vcoon-wash-08-sealed' },
  { name: 'Motor G19 suitable for LG 9 kg WASH', category: 'washing-machine', id: 'motor-g19-lg-9kg-wash' },
  { name: 'Motor LG wash 06', category: 'washing-machine', id: 'motor-lg-wash-06' },
  { name: 'Motor Moti Shaft wash 09', category: 'washing-machine', id: 'motor-moti-shaft-wash-09' },
  { name: 'Motor Moti Shaft wash 09 sealed', category: 'washing-machine', id: 'motor-moti-shaft-wash-09-sealed' },
  { name: 'Motor SS Churi wash 12', category: 'washing-machine', id: 'motor-ss-churi-wash-12' },
  { name: 'Motor SS wash 07', category: 'washing-machine', id: 'motor-ss-wash-07' },
  { name: 'Motor SS wash 07 sealed', category: 'washing-machine', id: 'motor-ss-wash-07-sealed' },
  { name: 'Motor VCOON wash 08 copper', category: 'washing-machine', id: 'motor-vcoon-wash-08-copper' },
  { name: 'Motor WPOOL wash 10 copper', category: 'washing-machine', id: 'motor-wpool-wash-10-copper' },
  { name: 'Motor WPOOL wash 10 sealed', category: 'washing-machine', id: 'motor-wpool-wash-10-sealed' },
  { name: 'Motor wash G15 LG Top Load', category: 'washing-machine', id: 'motor-wash-g15-lg-top-load' },
  { name: 'Motor wash G16 SS Top Load', category: 'washing-machine', id: 'motor-wash-g16-ss-top-load' },
  { name: 'Motor wash G21 suitable for panasonic', category: 'washing-machine', id: 'motor-wash-g21-panasonic' },
  { name: 'Wash Motor', category: 'washing-machine', id: 'wash-motor' },

  // Gear Box RAJA products
  { name: 'GEAR BOX 26 RAJA', category: 'washing-machine', id: 'gear-box-26-raja' },
  { name: 'Gear box 026 BIG PULLY 6800 RAJA', category: 'washing-machine', id: 'gear-box-026-big-pully-6800-raja' },
  { name: 'GearBox 01 raja', category: 'washing-machine', id: 'gearbox-01-raja' },
  { name: 'gearbox02raja', category: 'washing-machine', id: 'gearbox-02-raja' },
  { name: 'gearbox07raja', category: 'washing-machine', id: 'gearbox-07-raja' },
  { name: 'gearbox08raja', category: 'washing-machine', id: 'gearbox-08-raja' },
  { name: 'gearbox09raja', category: 'washing-machine', id: 'gearbox-09-raja' },
  { name: 'gearbox10raja', category: 'washing-machine', id: 'gearbox-10-raja' },
  { name: 'gearbox11raja', category: 'washing-machine', id: 'gearbox-11-raja' },
  { name: 'gearbox12raja', category: 'washing-machine', id: 'gearbox-12-raja' },
  { name: 'gearbox13raja', category: 'washing-machine', id: 'gearbox-13-raja' },
  { name: 'gearbox14raja', category: 'washing-machine', id: 'gearbox-14-raja' },
  { name: 'gearbox16raja', category: 'washing-machine', id: 'gearbox-16-raja' },
  { name: 'gearbox17raja', category: 'washing-machine', id: 'gearbox-17-raja' },
  { name: 'gearbox18raja', category: 'washing-machine', id: 'gearbox-18-raja' },
  { name: 'gearbox21raja', category: 'washing-machine', id: 'gearbox-21-raja' },
  { name: 'gearbox22nraja', category: 'washing-machine', id: 'gearbox-22n-raja' },
  { name: 'gearbox22raja', category: 'washing-machine', id: 'gearbox-22-raja' },
  { name: 'gearbox23raja', category: 'washing-machine', id: 'gearbox-23-raja' },
  { name: 'gearbox25raja', category: 'washing-machine', id: 'gearbox-25-raja' },
  { name: 'gearbox27raja', category: 'washing-machine', id: 'gearbox-27-raja' },
  { name: 'gearbox28raja', category: 'washing-machine', id: 'gearbox-28-raja' },
  { name: 'gearbox31raja', category: 'washing-machine', id: 'gearbox-31-raja' },
  { name: 'gearbox32raja', category: 'washing-machine', id: 'gearbox-32-raja' },
  { name: 'gearbox33raja', category: 'washing-machine', id: 'gearbox-33-raja' },
  { name: 'gearbox34raja', category: 'washing-machine', id: 'gearbox-34-raja' },
  { name: 'gearbox35raja', category: 'washing-machine', id: 'gearbox-35-raja' },
  { name: 'gearbox36raja', category: 'washing-machine', id: 'gearbox-36-raja' },
  { name: 'gearbox41raja', category: 'washing-machine', id: 'gearbox-41-raja' },
  { name: 'Gear Box RAJA', category: 'washing-machine', id: 'gear-box-raja' },

  // Gear Box Xindi products
  { name: 'Gear box 01 xinde', category: 'washing-machine', id: 'gear-box-01-xinde' },
  { name: 'Gear box 02 xinde', category: 'washing-machine', id: 'gear-box-02-xinde' },
  { name: 'Gear box 07 xinde', category: 'washing-machine', id: 'gear-box-07-xinde' },
  { name: 'Gear box 08 xinde', category: 'washing-machine', id: 'gear-box-08-xinde' },
  { name: 'Gear box 11 xinde', category: 'washing-machine', id: 'gear-box-11-xinde' },
  { name: 'Gear box 13 xinde', category: 'washing-machine', id: 'gear-box-13-xinde' },
  { name: 'Gear box 16 xinde', category: 'washing-machine', id: 'gear-box-16-xinde' },
  { name: 'Gear box 17 xinde', category: 'washing-machine', id: 'gear-box-17-xinde' },
  { name: 'Gear box 18 xinde', category: 'washing-machine', id: 'gear-box-18-xinde' },
  { name: 'Gear box 21 xinde', category: 'washing-machine', id: 'gear-box-21-xinde' },
  { name: 'Gear box 21SQ xinde', category: 'washing-machine', id: 'gear-box-21sq-xinde' },
  { name: 'Gear box 22 xinde', category: 'washing-machine', id: 'gear-box-22-xinde' },
  { name: 'Gear box 22N xinde', category: 'washing-machine', id: 'gear-box-22n-xinde' },
  { name: 'Gear box 23 xinde', category: 'washing-machine', id: 'gear-box-23-xinde' },
  { name: 'Gear box 25 xinde', category: 'washing-machine', id: 'gear-box-25-xinde' },
  { name: 'Gear box 26 (6800) xinde', category: 'washing-machine', id: 'gear-box-26-6800-xinde' },
  { name: 'Gear box 32 xinde', category: 'washing-machine', id: 'gear-box-32-xinde' },
  { name: 'Gear box 33 xinde', category: 'washing-machine', id: 'gear-box-33-xinde' },
  { name: 'Gear box 34 xinde', category: 'washing-machine', id: 'gear-box-34-xinde' },
  { name: 'Gear box 35 xinde', category: 'washing-machine', id: 'gear-box-35-xinde' },
  { name: 'Gear box 41 xinde', category: 'washing-machine', id: 'gear-box-41-xinde' },
  { name: 'Gear box 43 xinde', category: 'washing-machine', id: 'gear-box-43-xinde' },
  { name: 'Gear box 49 xinde', category: 'washing-machine', id: 'gear-box-49-xinde' },
  { name: 'Gear box 50 xinde', category: 'washing-machine', id: 'gear-box-50-xinde' },
  { name: 'Gear box 51 xinde', category: 'washing-machine', id: 'gear-box-51-xinde' },
  { name: 'Gear box 56 xinde', category: 'washing-machine', id: 'gear-box-56-xinde' },
  { name: 'Gear box 59 xinde', category: 'washing-machine', id: 'gear-box-59-xinde' },
  { name: 'Gear box 60 xinde', category: 'washing-machine', id: 'gear-box-60-xinde' },
  { name: 'Gear box 61 xinde', category: 'washing-machine', id: 'gear-box-61-xinde' },
  { name: 'Gear Box Xindi', category: 'washing-machine', id: 'gear-box-xindi' },

  // Door Lock products
  { name: 'Black Big Door lock for LG', category: 'washing-machine', id: 'black-big-door-lock-lg' },
  { name: 'Door Lock IFB', category: 'washing-machine', id: 'door-lock-ifb' },
  { name: 'Door Lock for LG', category: 'washing-machine', id: 'door-lock-lg' },
  { name: 'Door Lock for SS', category: 'washing-machine', id: 'door-lock-ss' },
  { name: 'Door Lock for LG (variant)', category: 'washing-machine', id: 'door-lock-lg-variant' },
  { name: 'Door Lock for LG (variant 2)', category: 'washing-machine', id: 'door-lock-lg-variant-2' },
  { name: 'Red Dori Door lock for LG', category: 'washing-machine', id: 'red-dori-door-lock-lg' },
  { name: 'White Door Lock for LG', category: 'washing-machine', id: 'white-door-lock-lg' },
  { name: 'Door Lock', category: 'washing-machine', id: 'door-lock' },

  // Timer products
  { name: 'LG 10 min', category: 'washing-machine', id: 'lg-10-min' },
  { name: 'haier 35 min 8 wire', category: 'washing-machine', id: 'haier-35-min-8-wire' },
  { name: 'haier 4 pin 35 min', category: 'washing-machine', id: 'haier-4-pin-35-min' },
  { name: 'onida 6084 35 min 7 wire', category: 'washing-machine', id: 'onida-6084-35-min-7-wire' },
  { name: 'samsung 35 min 4 wire', category: 'washing-machine', id: 'samsung-35-min-4-wire' },
  { name: 'vcon 35 min 4 wire 6049', category: 'washing-machine', id: 'vcon-35-min-4-wire-6049' },
  { name: '6009 LG 15 min', category: 'washing-machine', id: '6009-lg-15-min' },
  { name: 'Drain selector suitable for EKL', category: 'washing-machine', id: 'drain-selector-ekl' },
  { name: 'Drain selector suitable for onida', category: 'washing-machine', id: 'drain-selector-onida' },
  { name: 'GOD 35 min 6 wire', category: 'washing-machine', id: 'god-35-min-6-wire' },
  { name: 'LG 41.5 min', category: 'washing-machine', id: 'lg-41-5-min' },
  { name: 'LG 5 min', category: 'washing-machine', id: 'lg-5-min' },
  { name: 'SS 15 min', category: 'washing-machine', id: 'ss-15-min' },
  { name: 'SS 35 min 4 wire 6075', category: 'washing-machine', id: 'ss-35-min-4-wire-6075' },
  { name: 'Samsung 15 min 7 wire', category: 'washing-machine', id: 'samsung-15-min-7-wire' },
  { name: 'Samsung 42 min', category: 'washing-machine', id: 'samsung-42-min' },
  { name: 'Timer double LG', category: 'washing-machine', id: 'timer-double-lg' },
  { name: 'Timer suitable for EKL 5 min', category: 'washing-machine', id: 'timer-ekl-5-min' },
  { name: 'god 35 min 7 wire', category: 'washing-machine', id: 'god-35-min-7-wire' },
  { name: 'haier 4 pin 15 min', category: 'washing-machine', id: 'haier-4-pin-15-min' },
  { name: 'timer LG', category: 'washing-machine', id: 'timer-lg' },
  { name: 'vcon 5 min', category: 'washing-machine', id: 'vcon-5-min' },
  { name: 'vcon 6005', category: 'washing-machine', id: 'vcon-6005' },
  { name: 'vcon 6072', category: 'washing-machine', id: 'vcon-6072' },
  { name: 'vcon 6080', category: 'washing-machine', id: 'vcon-6080' },
  { name: 'w:pool 35 min 8 wire', category: 'washing-machine', id: 'wpool-35-min-8-wire' },
  { name: 'w:pool 35 min', category: 'washing-machine', id: 'wpool-35-min' },
  { name: 'w:pool 5 min', category: 'washing-machine', id: 'wpool-5-min' },
  { name: 'w:pool 6067', category: 'washing-machine', id: 'wpool-6067' },
  { name: 'Timer', category: 'washing-machine', id: 'timer' },

  // Clutch
  { name: 'Clutch', category: 'washing-machine', id: 'clutch' },

  // Spin Bellow products
  { name: 'Bellow suitable for 8700 models', category: 'washing-machine', id: 'bellow-8700-models' },
  { name: 'Bellow suitable for LG 7 kg with ring', category: 'washing-machine', id: 'bellow-lg-7kg-ring' },
  { name: 'Bellow suitable for LG 9 kg', category: 'washing-machine', id: 'bellow-lg-9kg' },
  { name: 'Bellow suitable for samsung 8 kg models', category: 'washing-machine', id: 'bellow-samsung-8kg' },
  { name: 'Suitable bellow for small universal big bush', category: 'washing-machine', id: 'bellow-small-universal-big-bush' },
  { name: 'Suitable for all models multi bellow', category: 'washing-machine', id: 'bellow-all-models-multi' },
  { name: 'Spin Bellow', category: 'washing-machine', id: 'spin-bellow' },

  // Inlet Valve products
  { name: 'Double Inlet Valve for SS', category: 'washing-machine', id: 'double-inlet-valve-ss' },
  { name: 'Blue Red Double DC Inlet Valve for LG', category: 'washing-machine', id: 'blue-red-double-dc-inlet-valve-lg' },
  { name: 'Grey Single Inlet Valve for SS', category: 'washing-machine', id: 'grey-single-inlet-valve-ss' },
  { name: 'Inlet valve 3 coil DC suitable for LG', category: 'washing-machine', id: 'inlet-valve-3-coil-dc-lg' },
  { name: 'Inlet valve double coil DC suitable for LG', category: 'washing-machine', id: 'inlet-valve-double-coil-dc-lg' },
  { name: 'Inlet valve double suitable for LG', category: 'washing-machine', id: 'inlet-valve-double-lg' },
  { name: 'Inlet valve double suitable for bosch', category: 'washing-machine', id: 'inlet-valve-double-bosch' },
  { name: 'Inlet valve single DC suitable for LG', category: 'washing-machine', id: 'inlet-valve-single-dc-lg' },
  { name: 'Inlet valve single suitable for LG', category: 'washing-machine', id: 'inlet-valve-single-lg' },
  { name: 'Inlet valve single suitable for samsung', category: 'washing-machine', id: 'inlet-valve-single-samsung' },
  { name: 'Inlet valve single suitable for woi', category: 'washing-machine', id: 'inlet-valve-single-woi' },
  { name: 'Single DC 12V Inlet Valve for LG', category: 'washing-machine', id: 'single-dc-12v-inlet-valve-lg' },
  { name: 'Single DC 220V Inlet Valve for LG', category: 'washing-machine', id: 'single-dc-220v-inlet-valve-lg' },
  { name: 'Triple DC Inlet Valve for LG', category: 'washing-machine', id: 'triple-dc-inlet-valve-lg' },
  { name: 'Triple DC Inlet Valve for SS', category: 'washing-machine', id: 'triple-dc-inlet-valve-ss' },
  { name: 'Blue Single DC Inlet Valve for LG', category: 'washing-machine', id: 'blue-single-dc-inlet-valve-lg' },
  { name: 'Grey Double Long Inlet Valve for LG', category: 'washing-machine', id: 'grey-double-long-inlet-valve-lg' },
  { name: 'Inlet Valve', category: 'washing-machine', id: 'inlet-valve' },

  // Pressure Switch products
  { name: 'Pressure sensor suitable for LG', category: 'washing-machine', id: 'pressure-sensor-lg' },
  { name: 'Pressure sensors suitable for Samsung', category: 'washing-machine', id: 'pressure-sensors-samsung' },
  { name: 'Pressure Switch', category: 'washing-machine', id: 'pressure-switch' },

  // Drain Motor products
  { name: 'Drain motor black suitable for Samsung', category: 'washing-machine', id: 'drain-motor-black-samsung' },
  { name: 'Drain motor suitable for GOD', category: 'washing-machine', id: 'drain-motor-god' },
  { name: 'Drain motor suitable for IFB', category: 'washing-machine', id: 'drain-motor-ifb' },
  { name: 'Drain motor suitable for LG', category: 'washing-machine', id: 'drain-motor-lg' },
  { name: 'Drain motor suitable for vcon', category: 'washing-machine', id: 'drain-motor-vcon' },
  { name: 'Drain motor suitable for w:pool', category: 'washing-machine', id: 'drain-motor-wpool' },
  { name: 'Drain motor white suitable for Samsung', category: 'washing-machine', id: 'drain-motor-white-samsung' },
  { name: 'Drain Motor', category: 'washing-machine', id: 'drain-motor' },

  // Microwave Magnetron products
  { name: 'Magnetron 210 witol', category: 'microwave', id: 'magnetron-210-witol' },
  { name: 'Magnetron 213 witol', category: 'microwave', id: 'magnetron-213-witol' },
  { name: 'Magnetron 214', category: 'microwave', id: 'magnetron-214' },
  { name: 'Magnetron 240 gp', category: 'microwave', id: 'magnetron-240-gp' },
  { name: 'Magnetron 610 witol', category: 'microwave', id: 'magnetron-610-witol' },
  { name: 'Magnetron 610240 GP witol', category: 'microwave', id: 'magnetron-610240-gp-witol' },
  { name: 'Magnetron Suitable for w:pool', category: 'microwave', id: 'magnetron-wpool' },
  { name: 'Magnetron', category: 'microwave', id: 'magnetron' },

  // Microwave Transformer products
  { name: 'Micro Transformers', category: 'microwave', id: 'micro-transformers' },
  { name: 'Micro transformer for oven micro', category: 'microwave', id: 'micro-transformer-oven' },
  { name: 'Transformer', category: 'microwave', id: 'transformer' },

  // Microwave Glass Tray products
  { name: 'Glass tray 12.5 inches', category: 'microwave', id: 'glass-tray-12-5-inches' },
  { name: 'Glass tray suitable for LG 9 inch plain', category: 'microwave', id: 'glass-tray-lg-9-inch' },
  { name: 'Glass tray suitable for Samsung 10.5 inches', category: 'microwave', id: 'glass-tray-samsung-10-5-inches' },
  { name: 'Glass Tray', category: 'microwave', id: 'glass-tray' },

  // Microwave Fuse
  { name: 'Fuse', category: 'microwave', id: 'fuse' },

  // Car washer parts
  { name: 'Car Washer', category: 'car-washer', id: 'washer' },
  { name: 'Car Washer Pipe', category: 'car-washer', id: 'pipe' },
  { name: 'Car Washer Adopter', category: 'car-washer', id: 'adopter' },
  { name: 'Car Washer Filter', category: 'car-washer', id: 'washer-filter' },
  { name: 'Car Washer Gun', category: 'car-washer', id: 'washer-gun' },
  { name: 'Car Washer Switch', category: 'car-washer', id: 'washer-switch' },

  // Car Washer products
  { name: "Car washer 2701", category: 'car-washer', id: "car-washer-2701" },
  { name: "Car washer adjustable", category: 'car-washer', id: "car-washer-adjustable" },
  { name: "Car washer bullet", category: 'car-washer', id: "car-washer-bullet" },
  { name: "Car washer raja", category: 'car-washer', id: "car-washer-raja" },

  // Car Washer Adopter products
  { name: "Washer's clear adopter", category: 'car-washer', id: "clear-adopter" },
  { name: "Washer's quick adopter", category: 'car-washer', id: "quick-adopter" },

  // Car Washer Pipe products
  { name: "Washer's pipe 05 mtr", category: 'car-washer', id: "pipe-05mtr" },
  { name: "Washer's pipe 08 mtr", category: 'car-washer', id: "pipe-08mtr" },
  { name: "Washer's pipe black heavy 07 mtr", category: 'car-washer', id: "pipe-black-heavy-07mtr" },
  { name: "Washer's pipe normal 05 mtr", category: 'car-washer', id: "pipe-normal-05mtr" },
  { name: "Washer's pipe small hole", category: 'car-washer', id: "pipe-small-hole" },

  // Car Washer Filter products
  { name: "Washer's black filter", category: 'car-washer', id: "washer-black-filter" },

  // Car Washer Gun products
  { name: "Washer gun 360 plastic", category: 'car-washer', id: "washer-gun-360-plastic" },
  { name: "Washer gun", category: 'car-washer', id: "washer-gun" },
  { name: "Washer metal gun 360", category: 'car-washer', id: "washer-metal-gun-360" },
  { name: "Washer's gun small thread hole", category: 'car-washer', id: "washer-gun-small-thread-hole" },

  // Car Washer Switch products
  { name: "Washer's switch", category: 'car-washer', id: "washer-switch" },
];

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();
  const searchRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/?search=${encodeURIComponent(searchQuery)}`);
      setShowSuggestions(false);
    }
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.length > 0) {
      const filtered = searchSuggestions.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 5); // Show max 5 suggestions
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion.name);
    setShowSuggestions(false);
    navigate(`/?search=${encodeURIComponent(suggestion.name)}`);
  };

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-card sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img src={logo} alt="Logo" className="h-14 w-auto" />
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {Object.entries(categories).map(([category, items]) => (
              <Popover key={category} className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={`group inline-flex items-center px-3 py-2 text-sm font-medium rounded-md transition duration-200 ease-in-out ${open ? 'text-brand-700 bg-brand-50' : 'text-neutral-600 hover:text-brand-600 hover:bg-brand-50'}`}
                    >
                      <span>{category}</span>
                      <ChevronDownIcon
                        className={`ml-2 h-5 w-5 transition duration-150 ease-in-out ${open ? 'text-brand-600 rotate-180' : 'text-neutral-400 group-hover:text-brand-500'}`}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 mt-3 transform -translate-x-1/4 w-screen max-w-xs lg:max-w-md">
                        <div className="rounded-xl shadow-elevated bg-white ring-1 ring-black ring-opacity-5 overflow-visible">
                          <div className="relative grid gap-1 bg-white px-5 py-6 overflow-visible">
                            {items.map((item) => (
                              item.subItems ? (
                                <div key={item.id} className="relative group/flyout overflow-visible">
                                  <div className="flex items-center p-3 rounded-lg hover:bg-brand-50 transition duration-150 ease-in-out cursor-pointer">
                                    <div className="ml-3 flex items-center justify-between w-full">
                                      <p className="text-base font-medium text-neutral-800">
                                        {item.name}
                                      </p>
                                      <svg
                                        className="ml-2 h-4 w-4 text-neutral-400 group-hover/flyout:text-brand-500"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                          clipRule="evenodd"
                                        />
                                      </svg>
                                    </div>
                                  </div>
                                  {/* Flyout menu */}
                                  <div className="absolute left-full top-0 w-56 opacity-0 invisible group-hover/flyout:opacity-100 group-hover/flyout:visible transition-all duration-200 ease-in-out z-50 shadow-elevated">
                                    <div className="bg-white rounded-xl shadow-elevated overflow-hidden border border-neutral-100">
                                      <div className="py-2">
                                        {item.subItems.map((subItem) => (
                                          <Link
                                            key={subItem.id}
                                            to={item.customLink || `/product/${category.toLowerCase()}/${item.id}`}
                                            className="flex items-center px-4 py-2 hover:bg-brand-50 transition duration-150 ease-in-out"
                                          >
                                            <div>
                                              <p className="text-sm font-medium text-neutral-700">
                                                {subItem.name}
                                              </p>
                                            </div>
                                          </Link>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ) : (
                                <Link
                                  key={item.id}
                                  to={item.customLink || `/product/${category.toLowerCase()}/${item.id}`}
                                  className="flex items-center p-3 rounded-lg hover:bg-brand-50 transition duration-150 ease-in-out"
                                >

                                  <div className="ml-3">
                                    <p className="text-base font-medium text-neutral-800">
                                      {item.name}
                                    </p>
                                  </div>
                                </Link>
                              )
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            ))}
          </div>

          {/* Search form */}
          <div className="hidden md:flex md:items-center">
            <form onSubmit={handleSearch} className="flex relative" ref={searchRef}>
              <div className="relative rounded-md shadow-sm">
                <input
                  type="search"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  onFocus={() => searchQuery.length > 0 && setShowSuggestions(true)}
                  className="block w-full pl-4 pr-10 py-2 border border-neutral-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 sm:text-sm transition duration-150 ease-in-out"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <MagnifyingGlassIcon className="h-5 w-5 text-neutral-400" aria-hidden="true" />
                </div>

                {/* Search Suggestions Dropdown */}
                {showSuggestions && suggestions.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-neutral-200 rounded-md shadow-lg z-50 max-h-60 overflow-y-auto">
                    {suggestions.map((suggestion, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="w-full text-left px-4 py-2 hover:bg-brand-50 focus:bg-brand-50 focus:outline-none transition duration-150 ease-in-out border-b border-neutral-100 last:border-b-0"
                      >
                        <div className="text-sm font-medium text-neutral-800">{suggestion.name}</div>
                        <div className="text-xs text-neutral-500 capitalize">{suggestion.category.replace('-', ' ')}</div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <button
                type="submit"
                className="ml-px inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-r-md text-white bg-brand-600 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 transition duration-150 ease-in-out"
              >
                Search
              </button>
            </form>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-neutral-500 hover:text-neutral-700 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-500 transition duration-150 ease-in-out"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <Transition
        show={mobileMenuOpen}
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="md:hidden bg-white shadow-elevated rounded-b-xl">
          <div className="pt-2 pb-3 space-y-1 divide-y divide-neutral-200">
            {Object.entries(categories).map(([category, items]) => (
              <div key={category} className="px-4 py-3">
                <div className="font-medium text-brand-700 mb-2 font-display">{category}</div>
                <div className="pl-4 space-y-1">
                  {items.map((item) => (
                    item.subItems ? (
                      <div key={item.id}>
                        <div className="px-3 py-2 text-base font-medium text-neutral-700 flex items-center justify-between">
                          <span>{item.name}</span>
                          <ChevronDownIcon className="h-5 w-5 text-neutral-400" aria-hidden="true" />
                        </div>
                        <div className="pl-6 space-y-1 mt-1 border-l-2 border-brand-100">
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.id}
                              to={item.customLink || `/product/${category.toLowerCase()}/${item.id}`}
                              className="flex items-center px-3 py-2 text-sm font-medium text-neutral-600 hover:text-brand-600 hover:bg-brand-50 rounded-md transition duration-150 ease-in-out"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        key={item.id}
                        to={item.customLink || `/product/${category.toLowerCase()}/${item.id}`}
                        className="flex items-center px-3 py-2 text-base font-medium text-neutral-600 hover:text-brand-600 hover:bg-brand-50 rounded-md transition duration-150 ease-in-out"
                        onClick={() => setMobileMenuOpen(false)}
                      >

                        {item.name}
                      </Link>
                    )
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="pt-4 pb-5 border-t border-neutral-200">
            <form onSubmit={handleSearch} className="px-4 flex">
              <input
                type="search"
                placeholder="Search products..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="flex-1 px-4 py-2 border border-r-0 border-neutral-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition duration-150 ease-in-out"
              />
              <button
                type="submit"
                className="bg-brand-600 text-white px-4 py-2 rounded-r-lg hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500 transition duration-150 ease-in-out"
                onClick={() => setMobileMenuOpen(false)}
              >
                <MagnifyingGlassIcon className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </Transition>
    </nav>
  );
}