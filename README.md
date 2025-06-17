# Take Inventory

A React Native mobile app built to streamline inventory counting and purchasing workflows in a grocery store produce department.

## Purpose

Built to solve a workplace problem when a new purchasing process required daily manual counting of hundreds of items, followed by Excel-based calculations to determine purchase quantities. The app replaces clipboard-based counting with mobile data collection and automated export to existing business workflows.

## Tech Stack

<img src="https://raw.githubusercontent.com/foxtrottwist/foxtrottwist/main/assets/brider-codes.png" alt="Bridge Builder Fox mascot coding" width="600" height="400" align="right">

*Bridger is here to help make inventory management more accessible and user-friendly.*

**Framework & Core:**
- React Native 0.49.3 - Cross-platform mobile development for iOS floor counting
- React 16.0.0-beta.5 - Component architecture for data handling
- React Navigation 1.0.0-beta.15 - Navigation between inventory lists

**Data & Integration:**
- AsyncStorage - Local storage for offline counting reliability
- Axios 0.17.0 - API communication with web application backend
- XLSX 0.11.7 - Excel file generation for business reporting

**UI & Export:**
- React Native Elements 0.17.0 - Touch-friendly counting interface
- Styled Components 2.2.3 - Component styling system
- React Native Fetch Blob 0.10.8 - File operations and Dropbox upload

## Key Features

**Mobile Counting Interface**
- Touch-based increment/decrement controls for rapid item counting
- Support for fractional quantities (0.25 increments) 
- Local data persistence prevents loss during extended counting sessions
- Offline functionality maintains reliability without network dependency

**Data Export & Integration**
- One-touch Excel file generation from counted inventory
- Automatic Dropbox upload for consistent file availability
- CSV export compatible with existing purchase calculation workflows
- Integration with companion web API for product list management

**Business Process Improvement**
- Reduced inventory counting time by 50% compared to manual clipboard method
- Eliminated data transfer errors between counting sheets and calculations
- Enabled focus on purchasing strategy rather than administrative tasks

## Getting Started

**Prerequisites:**
- Node.js and React Native development environment
- iOS device or simulator
- Dropbox API credentials
- Backend API for product lists

**Installation:**
```bash
npm install
cd ios && pod install && cd ..
npm start
npx react-native run-ios
```

**Environment Setup:**
```
LISTS=your_product_api_endpoint
LOGOUT=your_logout_endpoint  
DROP_BOX=your_dropbox_access_token
```

## Project Context

This was my first production mobile application, built while working as a produce buyer to address inefficiencies in a newly implemented purchasing process. The solution handles inventory counting on the sales floor and exports data to Excel workbooks that calculate optimal purchase quantities and shelf arrangements.

The app demonstrates practical problem-solving through software, focusing on workflow integration rather than technical complexity. It successfully reduced the time spent on administrative tasks and improved the accuracy of inventory data used for purchasing decisions. 
