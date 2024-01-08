Install: npm init playwright@latest

File Structure: 

├───.github
│   └───workflows
├───.history
│   ├───pages
│   └───tests
├───node_modules
│   ├───.bin
│   ├───@playwright
│   │   └───test
│   ├───@types
│   │   └───node
│   │       ├───assert
│   │       ├───dns
│   │       ├───fs
│   │       ├───readline
│   │       ├───stream
│   │       ├───timers
│   │       └───ts4.8
│   │           ├───assert
│   │           ├───dns
│   │           ├───fs
│   │           ├───readline
│   │           ├───stream
│   │           └───timers
│   ├───playwright
│   │   ├───lib
│   │   │   ├───common
│   │   │   ├───isomorphic
│   │   │   ├───loader
│   │   │   ├───matchers
│   │   │   ├───plugins
│   │   │   ├───reporters
│   │   │   ├───runner
│   │   │   ├───third_party
│   │   │   ├───transform
│   │   │   └───worker
│   │   └───types
│   ├───playwright-core
│   │   ├───bin
│   │   ├───lib
│   │   │   ├───cli
│   │   │   ├───client
│   │   │   ├───common
│   │   │   ├───generated
│   │   │   ├───image_tools
│   │   │   ├───protocol
│   │   │   ├───remote
│   │   │   ├───server
│   │   │   │   ├───android
│   │   │   │   ├───chromium
│   │   │   │   ├───dispatchers
│   │   │   │   ├───electron
│   │   │   │   ├───firefox
│   │   │   │   ├───har
│   │   │   │   ├───isomorphic
│   │   │   │   ├───recorder
│   │   │   │   ├───registry
│   │   │   │   ├───trace
│   │   │   │   │   ├───recorder
│   │   │   │   │   ├───test
│   │   │   │   │   └───viewer
│   │   │   │   └───webkit
│   │   │   ├───third_party
│   │   │   ├───utils
│   │   │   │   └───isomorphic
│   │   │   ├───utilsBundleImpl
│   │   │   └───vite
│   │   │       ├───htmlReport
│   │   │       ├───recorder
│   │   │       │   └───assets
│   │   │       └───traceViewer
│   │   │           └───assets
│   │   └───types
│   └───undici-types
├───pages
├───playwright-report
├───test-results
│   ├───baseURL-verify-base-url-chromium
│   ├───test-verify-base-url-chromium
│   ├───test-verify-login-page-chromium
│   └───userLogIn-verify-base-url-chromium
└───tests