package com.microblink.reactnative.recognizers;

import android.graphics.Bitmap;
import android.support.annotation.Nullable;
import android.util.Base64;

import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeArray;
import com.facebook.react.bridge.WritableNativeMap;
import com.microblink.entities.recognizers.Recognizer;
import com.microblink.image.Image;
import com.microblink.results.date.Date;

import java.io.ByteArrayOutputStream;
import java.io.IOException;

public abstract class SerializationUtils {
    private static final int COMPRESSED_IMAGE_QUALITY = 90;

    public static <T extends Recognizer.Result> void addCommonResultData(WritableMap jsonObject, T result) {
        jsonObject.putInt("resultState", serializeEnum(result.getResultState()));
    }

    public static WritableMap serializeDate( @Nullable Date date ) {
        if (date != null ) {
            WritableMap jsonDate = new WritableNativeMap();
            jsonDate.putInt("day", date.getDay());
            jsonDate.putInt("month", date.getMonth());
            jsonDate.putInt("year", date.getYear());
            return jsonDate;
        } else {
            return null;
        }
    }

    public static int serializeEnum(Enum e) {
        return e.ordinal() + 1;
    }

    public static WritableArray serializeStringArray(String[] strings) {
        WritableArray jsonStrings = new WritableNativeArray();
        for (String str : strings) {
            jsonStrings.pushString(str);
        }
        return jsonStrings;
    }

    public static String encodeImageBase64(Image image) {
        if (image == null) {
            return null;
        }
        Bitmap resultImgBmp = image.convertToBitmap();
        if (resultImgBmp == null) {
            return null;
        }
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        boolean success = resultImgBmp.compress(Bitmap.CompressFormat.JPEG, COMPRESSED_IMAGE_QUALITY, byteArrayOutputStream);
        String resultImgBase64 = null;
        if (success) {
            resultImgBase64 = Base64.encodeToString(byteArrayOutputStream.toByteArray(), Base64.NO_WRAP);
        }
        try {
            byteArrayOutputStream.close();
        } catch (IOException ignorable) {}
        return resultImgBase64;
    }

    public static String encodeByteArrayToBase64(byte[] arr) {
        return Base64.encodeToString(arr, Base64.NO_WRAP);
    }
}
