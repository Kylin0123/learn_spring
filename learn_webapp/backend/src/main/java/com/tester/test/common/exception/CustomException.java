package com.tester.test.common.exception;

import com.tester.test.common.response.ResultCode;

import java.text.MessageFormat;

public class CustomException extends Exception {
    private ResultCode resultCode;

    public CustomException(ResultCode resultCode){
        super(resultCode.message());
        this.resultCode = resultCode;
    }

    public CustomException(ResultCode resultCode, Object... args) {
        super(resultCode.message());
        String message = MessageFormat.format(resultCode.message(), args);
        resultCode.setMessage(message);
        this.resultCode = resultCode;
    }

    public ResultCode getResultCode() {
        return resultCode;
    }
}
