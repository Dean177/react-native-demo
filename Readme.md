drag the LottieReactNative.xcodeproj from node_modules/lottie-react-native/lib/ios into the Libraries folder of my app
I clicked on it in my Libaries folder and clicked on the target of LottieReactNative, went to the Build Settings and in 
that header search path I added:
$(SRCROOT)/../../../react-native/React
$(SRCROOT)/../../../react-native/ReactCommon
Then I went to my app target linked Frameworks and Libraries and added libLottieReactNative.a from the list
you get if you press +.

At this point it couldnt resolve #import <Lottie/Lottie.h>.

So I cloned https://github.com/airbnb/lottie-ios to a folder not in my app project. I then dragged the Lottie.xcodeproj into my Libraries group and added Lottie.framework to the linked Frameworks and Libraries.

Also, manually link the binary via
- Targets
- Your app
- Embedded Binaries
- Lottie.framework