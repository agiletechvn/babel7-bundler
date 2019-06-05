package com.reactnative_multibundler.demo;


import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.view.View;

import com.facebook.react.ReactApplication;
import com.facebook.react.ReactInstanceManager;
import com.reactnative_multibundler.R;

public class MainActivity extends Activity {
    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main_act_loadbundle);
        ReactInstanceManager reactInstanceManager = ((ReactApplication)getApplication()).getReactNativeHost().getReactInstanceManager();
        if (!reactInstanceManager.hasStartedCreatingInitialContext()) {
            reactInstanceManager.createReactContextInBackground();//This will load the base package platform.android.bundle first, or not.
        }
        // Loading the base package beforehand can reduce the time of page load later, but it will increase memory usage accordingly.
        // Of course, you can also not load the base package beforehand. This logic is already included in AsyncReactActivity.
        // If it is determined that the base package is not loaded, the base package will be loaded first and then the service package will be loaded.
        // Please use according to your own needs
        findViewById(R.id.btn_go_buz1).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {// open Mini App 1
                startActivity(new Intent(MainActivity.this,Buz1Activity.class));
            }
        });
        findViewById(R.id.btn_go_buz2).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {// open Mini App 2
                startActivity(new Intent(MainActivity.this,Buz2Activity.class));
            }
        });
        findViewById(R.id.btn_go_buz3).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {// open Mini App 3
                startActivity(new Intent(MainActivity.this,Buz3Activity.class));
            }
        });
    }
}
