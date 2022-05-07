package io.kylin.learn_springboot_shiro.database;


import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class UserService {
    public UserBean getUser(String username) {
        if (! DataSource.getData().containsKey(username)) {
            return null;
        }

        UserBean user = new UserBean();
        Map<String, String> detail = DataSource.getData().get(username);

        user.setUsername(username);
        user.setPassword(detail.get("password"));
        user.setRole(detail.get("role"));
        user.setPermission(detail.get("permission"));
        return user;
    }
}
