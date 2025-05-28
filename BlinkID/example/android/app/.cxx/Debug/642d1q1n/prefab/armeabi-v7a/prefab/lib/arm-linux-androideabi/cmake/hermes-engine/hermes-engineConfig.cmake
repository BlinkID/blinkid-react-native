if(NOT TARGET hermes-engine::libhermes)
add_library(hermes-engine::libhermes SHARED IMPORTED)
set_target_properties(hermes-engine::libhermes PROPERTIES
    IMPORTED_LOCATION "/Users/milanparadina/.gradle/caches/8.13/transforms/b91a94c10768de6e7e46fcdf99215bf3/transformed/hermes-android-0.79.2-debug/prefab/modules/libhermes/libs/android.armeabi-v7a/libhermes.so"
    INTERFACE_INCLUDE_DIRECTORIES "/Users/milanparadina/.gradle/caches/8.13/transforms/b91a94c10768de6e7e46fcdf99215bf3/transformed/hermes-android-0.79.2-debug/prefab/modules/libhermes/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

