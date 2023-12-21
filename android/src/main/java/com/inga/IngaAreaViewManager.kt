package com.inga
import android.widget.FrameLayout
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.ViewGroupManager
import com.facebook.react.uimanager.annotations.ReactProp

class IngaAreaViewManager(
  private val callerContext: ReactApplicationContext
) : ViewGroupManager<FrameLayout>() {
  override fun getName() = "IngaAreaView"

  override fun createViewInstance(reactContext: ThemedReactContext): FrameLayout {
    return IngaComponent(reactContext, callerContext)
  }
}
