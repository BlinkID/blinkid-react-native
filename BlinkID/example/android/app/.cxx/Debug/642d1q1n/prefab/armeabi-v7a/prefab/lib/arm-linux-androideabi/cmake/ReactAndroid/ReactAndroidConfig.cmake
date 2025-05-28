if(NOT TARGET ReactAndroid::hermestooling)
add_library(ReactAndroid::hermestooling SHARED IMPORTED)
set_target_properties(ReactAndroid::hermestooling PROPERTIES
    IMPORTED_LOCATION "/Users/milanparadina/.gradle/caches/8.13/transforms/8cb416b8178cb0e7f140959230f7f0bf/transformed/react-android-0.79.2-debug/prefab/modules/hermestooling/libs/android.armeabi-v7a/libhermestooling.so"
    INTERFACE_INCLUDE_DIRECTORIES "/Users/milanparadina/.gradle/caches/8.13/transforms/8cb416b8178cb0e7f140959230f7f0bf/transformed/react-android-0.79.2-debug/prefab/modules/hermestooling/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

if(NOT TARGET ReactAndroid::jsctooling)
add_library(ReactAndroid::jsctooling SHARED IMPORTED)
set_target_properties(ReactAndroid::jsctooling PROPERTIES
    IMPORTED_LOCATION "/Users/milanparadina/.gradle/caches/8.13/transforms/8cb416b8178cb0e7f140959230f7f0bf/transformed/react-android-0.79.2-debug/prefab/modules/jsctooling/libs/android.armeabi-v7a/libjsctooling.so"
    INTERFACE_INCLUDE_DIRECTORIES "/Users/milanparadina/.gradle/caches/8.13/transforms/8cb416b8178cb0e7f140959230f7f0bf/transformed/react-android-0.79.2-debug/prefab/modules/jsctooling/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

if(NOT TARGET ReactAndroid::jsi)
add_library(ReactAndroid::jsi SHARED IMPORTED)
set_target_properties(ReactAndroid::jsi PROPERTIES
    IMPORTED_LOCATION "/Users/milanparadina/.gradle/caches/8.13/transforms/8cb416b8178cb0e7f140959230f7f0bf/transformed/react-android-0.79.2-debug/prefab/modules/jsi/libs/android.armeabi-v7a/libjsi.so"
    INTERFACE_INCLUDE_DIRECTORIES "/Users/milanparadina/.gradle/caches/8.13/transforms/8cb416b8178cb0e7f140959230f7f0bf/transformed/react-android-0.79.2-debug/prefab/modules/jsi/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

if(NOT TARGET ReactAndroid::reactnative)
add_library(ReactAndroid::reactnative SHARED IMPORTED)
set_target_properties(ReactAndroid::reactnative PROPERTIES
    IMPORTED_LOCATION "/Users/milanparadina/.gradle/caches/8.13/transforms/8cb416b8178cb0e7f140959230f7f0bf/transformed/react-android-0.79.2-debug/prefab/modules/reactnative/libs/android.armeabi-v7a/libreactnative.so"
    INTERFACE_INCLUDE_DIRECTORIES "/Users/milanparadina/.gradle/caches/8.13/transforms/8cb416b8178cb0e7f140959230f7f0bf/transformed/react-android-0.79.2-debug/prefab/modules/reactnative/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

