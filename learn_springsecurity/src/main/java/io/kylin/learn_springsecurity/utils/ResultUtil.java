package io.kylin.learn_springsecurity.utils;

import io.kylin.learn_springsecurity.result.Result;
import io.kylin.learn_springsecurity.result.ResultEnum;

public class ResultUtil {
    public static Result success(Object object) {
        Result result = new Result(ResultEnum.SUCCESS.getCode(), ResultEnum.SUCCESS.getMsg(), object);
        return result;
    }

    public static Result error(ResultEnum resultEnum, String reason) {
        Result result = new Result(resultEnum.getCode(), resultEnum.getMsg(), reason);
        return result;
    }
}
