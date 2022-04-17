package com.tester.test.controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.tester.test.annotation.JwtIgnore;
import com.tester.test.common.exception.CustomException;
import com.tester.test.common.response.Result;
import com.tester.test.common.response.ResultCode;
import com.tester.test.entity.Audience;
import com.tester.test.util.JwtTokenUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.UUID;

@Slf4j
@RestController
@CrossOrigin
public class AdminUserController {
    @Autowired
    private Audience audience;

    @RequestMapping(value = "/admin/login", method = {RequestMethod.POST, RequestMethod.OPTIONS})
    @JwtIgnore
    public Result adminLogin (HttpServletResponse response, @RequestBody String jsonBody) throws CustomException {
        String username = "";
        String password = "";
        try {
            JSONObject jsonObject = JSON.parseObject(jsonBody);
            username = jsonObject.getString("username");
            password = jsonObject.getString("password");
        } catch (Exception e) {
            throw new CustomException((ResultCode.PARAM_IS_INVALID));
        }
        String userId = UUID.randomUUID().toString();
        String role = "admin";
        // 创建token
        if (!username.equals("admin") || !password.equals("admin")) {
            throw new CustomException(ResultCode.USER_LOGIN_ERROR);
        }
        String token = JwtTokenUtil.createJWT(userId, username, role, audience);
        log.info("### 登录成功, token={} ###", token);
        // 将token放在响应头
        response.setHeader(JwtTokenUtil.AUTH_HEADER_KEY, JwtTokenUtil.TOKEN_PREFIX + token);
        // 将token响应给客户端
        JSONObject result = new JSONObject();
        result.put("token", token);
        return Result.SUCCESS(result);
    }

    @RequestMapping(value = "/admin/user", method = {RequestMethod.GET, RequestMethod.OPTIONS})
    public Result getUser(@RequestParam int id) {
        log.info("### 查询用户id=" +  id + " ###");
        JSONObject result = new JSONObject();
        result.put("id", id);
        return Result.SUCCESS(result);
    }

    @RequestMapping(value = "/admin/user/all", method = {RequestMethod.GET, RequestMethod.OPTIONS})
    public Result userList() {
        log.info("### 查询所有用户列表 ###");
        return Result.SUCCESS();
    }
}
