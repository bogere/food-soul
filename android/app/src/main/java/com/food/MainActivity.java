package com.food;

import com.facebook.react.ReactActivity;
//added the following to support react native gesture handler.. for react navigation
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;


public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "food";
    }

    @Override
    protected ReactActivityDelegate  createReactActivityDelegate(){
        return new ReactActivityDelegate(this, getMainComponentName()){
          @Override
          protected ReactRootView createReactRootView(){
              //attaching the RNGestureHandler to the Mainactivity
            return new RNGestureHandlerEnabledRootView(MainActivity.this);
          }       
        };
    }
}
