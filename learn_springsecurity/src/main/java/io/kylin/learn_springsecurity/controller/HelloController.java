package io.kylin.learn_springsecurity.controller;

import io.kylin.learn_springsecurity.entity.UserInfo;
import io.kylin.learn_springsecurity.result.Result;
import io.kylin.learn_springsecurity.result.ResultEnum;
import io.kylin.learn_springsecurity.utils.ResultUtil;
import io.kylin.learn_springsecurity.utils.SecurityUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.security.PermitAll;
import javax.naming.AuthenticationException;
import java.util.Map;

@RestController
public class HelloController {
    @Autowired
    AuthenticationManager authenticationManager;

    @PostMapping("/user/login")
    public Result login(@RequestBody Map<String, String> params) {
        try {
            UserInfo userInfo = SecurityUtils.login(params.get("username"), params.get("password"), authenticationManager);
            return ResultUtil.success(userInfo);
        } catch (AuthenticationException e) {
            return ResultUtil.error(ResultEnum.USER_NOT_EXIST, e.getLocalizedMessage());
        }
    }

    @RequestMapping("/hello")
    public String hello() {
        return "hello";
    }
}
