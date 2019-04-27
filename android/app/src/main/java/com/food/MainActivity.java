package com.food;

import com.facebook.react.ReactActivity;
//added the following to support react native gesture handler.. for react navigation
/*import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage; */


//import java.utils.Arrays;
//import java.util.List;
//import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;
//import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
     @Override
    protected String getMainComponentName() {
        return "food";
    }

    //@Override
    /*protected ReactActivityDelegate  createReactActivityDelegate(){
        return new ReactActivityDelegate(this, getMainComponentName()){
          //@Override
          protected ReactRootView createReactRootView(){
              //attaching the RNGestureHandler to the Mainactivity
            return new RNGestureHandlerEnabledRootView(MainActivity.this);
          }       
        };
    }*/ // i hear that it is not needed.../unecessary..
    //https://codeburst.io/using-react-navigation-3-0-in-react-native-apps-38cd5020fbbe
    /*protected List<ReactPackage> getPackages() { //this is not supposed to be here
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
          new RNGestureHandlerPackage()
      );
  }*/
}
