(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{80:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return h}));var n=a(3),i=a(7),o=(a(0),a(83)),r=a(87),s={id:"architecture",title:"Architecture"},l={unversionedId:"architecture",id:"architecture",isDocsHomePage:!1,title:"Architecture",description:"idb is formed of two components that have different responsibilities. Both these components are necessary for idb to run commands.",source:"@site/docs/architecture.mdx",slug:"/architecture",permalink:"/docs/architecture",version:"current",sidebar:"docs",previous:{title:"Guided Tour",permalink:"/docs/guided-tour"},next:{title:"Commands",permalink:"/docs/commands"}},c=[{value:"The <code>idb</code> cli",id:"the-idb-cli",children:[]},{value:"The <code>idb_companion</code>",id:"the-idb_companion",children:[]},{value:"Connections",id:"connections",children:[]},{value:"Differences between Devices, Simulators &amp; Emulators",id:"differences-between-devices-simulators--emulators",children:[]},{value:"Framework Concepts",id:"framework-concepts",children:[{value:"Targets",id:"targets",children:[]},{value:"Target Sets",id:"target-sets",children:[]},{value:"Configuration Values",id:"configuration-values",children:[]},{value:"Command Protocols &amp; Implementations",id:"command-protocols--implementations",children:[]},{value:"Logging",id:"logging",children:[]},{value:"IO",id:"io",children:[]},{value:"<code>FBFuture</code>",id:"fbfuture",children:[]}]},{value:"<code>idb_companion</code> concepts",id:"idb_companion-concepts",children:[{value:"main",id:"main",children:[]},{value:"FBIDBServiceHandler",id:"fbidbservicehandler",children:[]},{value:"FBIDBCommandExecutor",id:"fbidbcommandexecutor",children:[]}]}],m={rightToc:c};function h(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"idb")," is formed of two components that have different responsibilities. Both these components are necessary for ",Object(o.b)("inlineCode",{parentName:"p"},"idb")," to run commands."),Object(o.b)("h2",{id:"the-idb-cli"},"The ",Object(o.b)("inlineCode",{parentName:"h2"},"idb")," cli"),Object(o.b)("p",null,"This is a python3 cli that exposes all of the functionality that idb has to offer. As it is written in Python, this does not need to be run from the Mac to which your iPhone or iOS Simulator is attached."),Object(o.b)("p",null,"The cli itself is a thin wrapper for a client of the ",Object(o.b)("inlineCode",{parentName:"p"},"idb_companion"),". All communication to the ",Object(o.b)("inlineCode",{parentName:"p"},"idb_companion")," is done via ",Object(o.b)("inlineCode",{parentName:"p"},"gRPC"),". This can be either through TCP or a Unix Domain Socket."),Object(o.b)("p",null,"This client library can be imported into your own python3 code if you wish, or the CLI can be called from any other kind of automation."),Object(o.b)("h2",{id:"the-idb_companion"},"The ",Object(o.b)("inlineCode",{parentName:"h2"},"idb_companion")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"idb_companion")," is a ",Object(o.b)("inlineCode",{parentName:"p"},"gRPC")," server in Objective-C++ that runs on macOS. It talks to the native APIs that are used for automating Simulators and Devices. It links the ",Object(o.b)("inlineCode",{parentName:"p"},"FBSimulatorControl")," and ",Object(o.b)("inlineCode",{parentName:"p"},"FBDeviceControl")," Frameworks, which are part of the overall ",Object(o.b)("inlineCode",{parentName:"p"},"idb")," project."),Object(o.b)("p",null,"When the ",Object(o.b)("inlineCode",{parentName:"p"},"idb_companion")," acts as ",Object(o.b)("inlineCode",{parentName:"p"},"gRPC")," server, it does so for a ",Object(o.b)("em",{parentName:"p"},"single")," iOS target (a device or simulator)."),Object(o.b)("p",null,"Additionally, the ",Object(o.b)("inlineCode",{parentName:"p"},"idb_companion")," has some commands that are deliberately unavailable from the python CLI, these operations are related to iOS Device management or operations on the lifecycle of a Simulator."),Object(o.b)("img",{alt:"idb architecture",src:Object(r.a)("img/idb_architecture.png")}),Object(o.b)("h2",{id:"connections"},"Connections"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"idb")," cli will, by default operate in one of two modes:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"If the ",Object(o.b)("inlineCode",{parentName:"li"},"idb")," cli is running on macOS, then it will automatically start and stop companions for all targets that are attached to your Mac. This means that you can run commands against any iOS Simulators that you have, as well as any devies that you have connected."),Object(o.b)("li",{parentName:"ul"},"If the ",Object(o.b)("inlineCode",{parentName:"li"},"idb"),' cli is running on any other OS, it will not manage companions for you. In this case you can either "attach" companions via ',Object(o.b)("inlineCode",{parentName:"li"},"idb connect")," or explictly on every call using the ",Object(o.b)("inlineCode",{parentName:"li"},"IDB_COMPANION=hostname:port")," environment variable. This allows you to perform ",Object(o.b)("inlineCode",{parentName:"li"},"idb")," commands against companions running on other hosts. These facilities for companion discovery work on macOS also.")),Object(o.b)("h2",{id:"differences-between-devices-simulators--emulators"},"Differences between Devices, Simulators & Emulators"),Object(o.b)("p",null,"iOS Devices and Simulators behave in substantially different ways, as well as Simulators behaving very differently to Emulators (for instance Android emulators):"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"iOS Simulators and their child processes, appear as regular processes on the host operating system."),Object(o.b)("li",{parentName:"ul"},"iOS Simulators run executables that are native to macOS. This is unlike emulators for Android which may run across a variety of host operating systems, will always run native Android executables and may translate ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Instruction_set_architecture"}),"between ISAs"),"."),Object(o.b)("li",{parentName:"ul"},"As iOS Simulators appear as native processes to macOS, many of the macOS level APIs for interacting with files and processes work just the same. This is useful in implementing Simulator functionality. The iOS Simulator uses the same kernel as the host macOS, which also goes some way to explain that some Xcode versions have increased macOS version requirements (there may be new kernel functionality in newer iOS versions that means that Simulators require this functionality through a macOS upgrade)."),Object(o.b)("li",{parentName:"ul"},'iOS Simulators do not use exactly the same system frameworks as macOS. These Frameworks are implemented in the "Simulator Runtime" that is bundled within Xcode. The runtime contains Frameworks that are broadly the same as those on an iOS Device, except they are compiled for the macOS host archiecture.'),Object(o.b)("li",{parentName:"ul"},"As Simulators run natively, they have similar performance characteristics to that of the host. In a sense Simulator Applications perform in a similar way to a macOS application running on macOS. This usually means that Simulators are substantially more performant than emulators, even when an emulator has access to a hypervisor and is running the same ISA."),Object(o.b)("li",{parentName:"ul"},'iOS Simulators have the concept of a "root" directory, which can be thought of as the Simulator\'s Filesystem. Applications running inside the Simulator still have access to files outside of this root (there is no ',Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Chroot"}),Object(o.b)("inlineCode",{parentName:"a"},"chroot"),"'ing"),' inside of the Simulator), so are able to manipulate files that outside of this root. Applications are also able to manipulate files outside of their own "Application Sandbox" which is not the case on iOS Devices.'),Object(o.b)("li",{parentName:"ul"},'This lack of isolation in iOS Simulators is a double edged sword. It can make certain automation cases more convenient to implement, but it is not easy to ensure that a Simulator has access to a limited amount of system resources. For example, emulators typically allow setting an upper limit on the number of cores or memory that can be consumed by the "guest" OS, where iOS Simulators can access the same resources that any application on the host can. This makes it harder to isolate multiple iOS Simulators running on the same host from each other. For instance, an iOS Simulator Application that consumes extreme amounts of system resources will exhaust these resources for other applications, processes or Simulators running on the same host.'),Object(o.b)("li",{parentName:"ul"},'iOS Devices are very strict about isolating processes from each other as well as the host to which it is attached. Interaction between the host and attached iOS Device is only possible through purpose-built APIs that exposes functionality for existing host-device behaviours. For instance, iOS App launching is implemented on iOS Devices through APIs that are used by the "Instruments" Application. This functionality is typically provided over a socket transport, with varying different protocol implementations depending on the domain. Access to these services is arbitrated via a ',Object(o.b)("inlineCode",{parentName:"li"},"lockdown")," service running on the iOS Device."),Object(o.b)("li",{parentName:"ul"},"As such, the implementations for functionality across iOS Simulators & Devices are drastically different, even within Xcode's own Frameworks.")),Object(o.b)("h2",{id:"framework-concepts"},"Framework Concepts"),Object(o.b)("p",null,"There are two frameworks in ",Object(o.b)("inlineCode",{parentName:"p"},"FBSimulatorControl")," and ",Object(o.b)("inlineCode",{parentName:"p"},"FBDeviceControl")," that exist to implement the majority of the functionality used by ",Object(o.b)("inlineCode",{parentName:"p"},"idb"),". Additionally, there is the ",Object(o.b)("inlineCode",{parentName:"p"},"FBControlCore")," Framework that exists to define common interfaces for the Device and Simulator Frameworks and to provide other functionality that is common to both. These Frameworks are able to be used independently of ",Object(o.b)("inlineCode",{parentName:"p"},"idb")," itself. This is an overview of how these Frameworks are designed together"),Object(o.b)("h3",{id:"targets"},"Targets"),Object(o.b)("p",null,"A instance of a target (",Object(o.b)("inlineCode",{parentName:"p"},"FBiOSTarget"),") is an object that represents a single iOS Simulator or Device. ",Object(o.b)("inlineCode",{parentName:"p"},"FBiOSTarget")," is a protocol definition that describes the functionality that is implemented by both ",Object(o.b)("inlineCode",{parentName:"p"},"FBSimulator")," and ",Object(o.b)("inlineCode",{parentName:"p"},"FBDevice"),". This abstraction means that higher-level applications and Frameworks are able to treat a target then same, regardless of whether it is an iOS Simulator or Device."),Object(o.b)("p",null,"As there are substantial differences in the way that iOS Simulators and Devices operate, this level of abstraction allows the Frameworks to smooth over the differences present in implementing common functionality."),Object(o.b)("h3",{id:"target-sets"},"Target Sets"),Object(o.b)("p",null,'A "Target Set" (',Object(o.b)("inlineCode",{parentName:"p"},"FBiOSTargetSet"),") represents a collection of targets. These are implemented in both ",Object(o.b)("inlineCode",{parentName:"p"},"FBSimulatorSet")," and ",Object(o.b)("inlineCode",{parentName:"p"},"FBDeviceSet"),". A Simulator set represents a root directory that is common to a number of Simulators. A Device Set represents all of the Devices attached to the host."),Object(o.b)("p",null,'This abstraction allows for interfaces to "CRUD" operations on both Simulators and Devices, despite having different implementations. For instance the same API is used across Simulators and Devices for ',Object(o.b)("inlineCode",{parentName:"p"},"erasing")," them."),Object(o.b)("h3",{id:"configuration-values"},"Configuration Values"),Object(o.b)("p",null,'Across the Frameworks, there are "Configuration" values, implemented as Objective-C classes. These are typically used for consolidating all the information required for a particular API call. For instance ',Object(o.b)("inlineCode",{parentName:"p"},"FBApplicationLaunchConfiguration")," defines launch arguments, environment and launch modes."),Object(o.b)("p",null,"These types exist so that APIs do not require extremely long and cumbersome argument lists, as well as providing sane defaults. These types are intentionally as behaviour-less as possible, close to pure value types."),Object(o.b)("h3",{id:"command-protocols--implementations"},"Command Protocols & Implementations"),Object(o.b)("p",null,'The protocols provide common APIs across Simulators and Devices. This allows the caller to treat the reciever the same, whether it is a Simulator or Device. There may be some protocols that are only supported by one or the other, depending on the target. For instance there is no concept of "Activation" on a iOS Simulator, so ',Object(o.b)("inlineCode",{parentName:"p"},"FBDeviceActivationCommands")," is only implemented by ",Object(o.b)("inlineCode",{parentName:"p"},"FBDevice"),"."),Object(o.b)("p",null,"Implementations across Simulators & Devices are completely separated and implemented in their respective Frameworks. As an example, ",Object(o.b)("inlineCode",{parentName:"p"},"FBApplicationCommands")," (which provides an API for launching and listing Applications on an iOS Target), is implemented separately in ",Object(o.b)("inlineCode",{parentName:"p"},"FBSimulatorApplicationCommands")," and ",Object(o.b)("inlineCode",{parentName:"p"},"FBDeviceApplicationCommands"),"."),Object(o.b)("p",null,"If functionality is common to both Simulators & Devices, it's protocol is added to ",Object(o.b)("inlineCode",{parentName:"p"},"FBiOSTarget")," so that implementors of ",Object(o.b)("inlineCode",{parentName:"p"},"FBiOSTarget")," are required to implement it. For functionality that is not common, the relevant protocol is added to the definition of the concrete ",Object(o.b)("inlineCode",{parentName:"p"},"FBSimulator")," or ",Object(o.b)("inlineCode",{parentName:"p"},"FBDevice")," class. For non-common protocols, the caller must either check for protocol conformance before calling an API, or use the concrete type directly."),Object(o.b)("h3",{id:"logging"},"Logging"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"FBControlCoreLogger"),' is used throughout the codebase. This provides a common interface for logging out to system level loggers as well as files. Since all these Frameworks may be used in a variety of different scenarios, included where a logging client may be remote this abstraction provides a common way of directing logs to the appropriate place. This is an "unstructured logger", which recieves arbitrary strings.'),Object(o.b)("p",null,"There are also classes that are used for intercepting internal calls (",Object(o.b)("inlineCode",{parentName:"p"},"FBLoggingWrapper"),') and logging them out to a "structured logger" (',Object(o.b)("inlineCode",{parentName:"p"},"FBEventReporter"),"). This is used in ",Object(o.b)("inlineCode",{parentName:"p"},"idb")," to produce accurate logging of all API calls that are made in the server. This supports user-defined classes, so is ideal for pushing into datastores that support aggregation."),Object(o.b)("h3",{id:"io"},"IO"),Object(o.b)("p",null,"Due to the nature of the functionality that is offerend in the Frameworks, IO is a very common task. There are a number of abstractions for reading and writing data between various sources and sinks. For example, the common interface (",Object(o.b)("inlineCode",{parentName:"p"},"FBFileReader"),") is used to read output from a spawned Application process and relay it to a consumer (",Object(o.b)("inlineCode",{parentName:"p"},"FBFileWriter"),"). This is then used to pipe Application output over ",Object(o.b)("inlineCode",{parentName:"p"},"idb"),"'s gRPC interface without the Application launcher having to be aware of what is consuming the output."),Object(o.b)("p",null,"All of this is backed by ",Object(o.b)("inlineCode",{parentName:"p"},"libdispatch"),", due to it's affordance for asynchronous IO, where file reading and writing is managed in an efficient manner without the user having to build their own IO multiplexer."),Object(o.b)("h3",{id:"fbfuture"},Object(o.b)("inlineCode",{parentName:"h3"},"FBFuture")),Object(o.b)("p",null,'A huge amount of the "work" that is done inside the Frameworks is based on IO and calling out to other APIs that perform IO. This work is very asynchronous, which means that there is a strong case for a consistent API for performing and waiting on this work.'),Object(o.b)("p",null,"Since the Frameworks are Objective-C Frameworks, as well as the absence of an API such as ",Object(o.b)("inlineCode",{parentName:"p"},"async"),"/",Object(o.b)("inlineCode",{parentName:"p"},"await")," within the Swift language, the ",Object(o.b)("inlineCode",{parentName:"p"},"FBFuture")," class is used to encapsulate this asynchronous work. It is preferrable for these features to exist at the language or standard library level to avoid implementing this kind of functionality, however there are benefits to doing so:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Error conditions"),". Nearly all of the asynchronous operations represented by a ",Object(o.b)("inlineCode",{parentName:"li"},"FBFuture")," are failible in some way, so an ",Object(o.b)("inlineCode",{parentName:"li"},"FBFuture")," can be resolved to an error state with a full ",Object(o.b)("inlineCode",{parentName:"li"},"NSError"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Chaining"),". A single high-level API may be formed of a sequence of asynchronous calls that occur one after another. The ",Object(o.b)("inlineCode",{parentName:"li"},"FBFuture")," syntax provides a way of threading these all together in a quasi-imperative way."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Queues must be always defined"),". In order to prevent unintended behaviour, where an async callback is called on an arbitrary or private queue, any consumer of an ",Object(o.b)("inlineCode",{parentName:"li"},"FBFuture")," must provide the queue that the callback will be called on. This is also true of chaining, which promotes the separation of queues that are used for serializing calls to other APIs or queues that are used for background behaviour that can be performed on any thread. For example, all calls to ",Object(o.b)("inlineCode",{parentName:"li"},"CoreSimulator")," must be serialized on the same thread but work in a Future that performs pure data transformation with no side-effects can be performed on an arbitrary background queue."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"No waiter thread"),". All resolution of Futures is performed asynchronously, there does not need to be a thread or queue waiting on the resolution of a Future. This means that if multiple Futures are running concurrently there is not a danger of thread exhaustion.")),Object(o.b)("p",null,"Code that is a consumer of ",Object(o.b)("inlineCode",{parentName:"p"},"FBFuture")," can use it's calls to recieve a callback upon completion, or to ",Object(o.b)("inlineCode",{parentName:"p"},"await:")," it's result synchronously to obtain a value. The internal usage of ",Object(o.b)("inlineCode",{parentName:"p"},"FBFuture")," avoids any synchronous work as far as possible. A consumer of ",Object(o.b)("inlineCode",{parentName:"p"},"idb")," need not be aware of these details, as they are internal to the implementation of the ",Object(o.b)("inlineCode",{parentName:"p"},"idb_companion"),"."),Object(o.b)("h2",{id:"idb_companion-concepts"},Object(o.b)("inlineCode",{parentName:"h2"},"idb_companion")," concepts"),Object(o.b)("p",null,"The majority of what the ",Object(o.b)("inlineCode",{parentName:"p"},"idb_companion")," does is to act as a gRPC server to all the functionality across the ",Object(o.b)("inlineCode",{parentName:"p"},"FBSimulatorControl")," and ",Object(o.b)("inlineCode",{parentName:"p"},"FBDeviceControl")," Frameworks."),Object(o.b)("p",null,"It does have a handful of components that are important to the way that it operates."),Object(o.b)("h3",{id:"main"},Object(o.b)("a",Object(n.a)({parentName:"h3"},{href:"https://github.com/facebook/idb/blob/master/idb_companion/main.m"}),Object(o.b)("inlineCode",{parentName:"a"},"main"))),Object(o.b)("p",null,"This is the entrypoint to the ",Object(o.b)("inlineCode",{parentName:"p"},"idb_companion")," and includes all of the various flags that are supported by it. This is used for specifying how the gRPC server should be started for a given iOS Target."),Object(o.b)("p",null,'Additionally, it exposes a number of "CRUD" commands that are destructive for managing Simulators and Devices. These commands are intentionally left out of the gRPC interface, to prevent unwanted behaviour. If you wish to perform destructive commands, these must be performed on the host where the iOS Simulators or Devices are present.'),Object(o.b)("h3",{id:"fbidbservicehandler"},Object(o.b)("a",Object(n.a)({parentName:"h3"},{href:"https://github.com/facebook/idb/blob/master/idb_companion/Server/FBIDBServiceHandler.mm"}),Object(o.b)("inlineCode",{parentName:"a"},"FBIDBServiceHandler"))),Object(o.b)("p",null,"This is an C++ class that ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebook/idb/blob/master/proto/idb.proto"}),"implements the gRPC interface"),". This is a C++ class as the ",Object(o.b)("inlineCode",{parentName:"p"},"idb_companion")," is using the gRPC library for C++. "),Object(o.b)("p",null,"Requests are forwarded to the handler on a thread pool that is internal to the gRPC C++ library. The overwhelming majority of calls made to the companion will call out to APIs that are backed by an ",Object(o.b)("inlineCode",{parentName:"p"},"FBFuture"),". This means that the handler thread is then responsible for awaiting the resolution of that ",Object(o.b)("inlineCode",{parentName:"p"},"FBFuture"),". Each handler call is wrapped in an autorelease pool to prevent memory leakage. The calls to the underlying Frameworks will serialize work appropriately, due to their usage of Futures."),Object(o.b)("h3",{id:"fbidbcommandexecutor"},Object(o.b)("a",Object(n.a)({parentName:"h3"},{href:"https://github.com/facebook/idb/blob/master/idb_companion/Server/FBIDBCommandExecutor.h"}),Object(o.b)("inlineCode",{parentName:"a"},"FBIDBCommandExecutor"))),Object(o.b)("p",null,"This is a pure Objective-C class that provides a facade over the many APIs in the underlying Framework, so that the service handler does not need to be aware of how they operate. This also means that C++ only needs to be used where it is necessary, so that if the gRPC handler is ever migrated to Swift there will be minimal implementation in the handler."),Object(o.b)("p",null,"Before calling the command executor, the service handler needs to convert C++ types to their Objective-C equivalents as request and response objects are expressed via C++ protobufs."))}h.isMDXComponent=!0},83:function(e,t,a){"use strict";a.d(t,"a",(function(){return h})),a.d(t,"b",(function(){return d}));var n=a(0),i=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=i.a.createContext({}),m=function(e){var t=i.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},h=function(e){var t=m(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=m(a),b=n,d=h["".concat(r,".").concat(b)]||h[b]||u[b]||o;return a?i.a.createElement(d,s(s({ref:t},c),{},{components:a})):i.a.createElement(d,s({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var c=2;c<o;c++)r[c]=a[c];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},87:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return r}));var n=a(22),i=a(88);function o(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var o=void 0===n?{}:n,r=o.forcePrependBaseUrl,s=void 0!==r&&r,l=o.absolute,c=void 0!==l&&l;if(!a)return a;if(a.startsWith("#"))return a;if(Object(i.b)(a))return a;if(s)return t+a;var m=a.startsWith(t)?a:t+a.replace(/^\//,"");return c?e+m:m}(o,a,e,t)}}}function r(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},88:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return i}))}}]);