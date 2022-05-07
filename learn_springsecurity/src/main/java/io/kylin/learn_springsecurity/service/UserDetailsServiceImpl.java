package io.kylin.learn_springsecurity.service;

import io.kylin.learn_springsecurity.entity.UserInfo;
import io.kylin.learn_springsecurity.utils.SecurityUtils;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserDetailsServiceImpl implements UserDetailsService{
     @Override
     public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
         String password = SecurityUtils.encryptPassword("123456");
         SimpleGrantedAuthority authority = new SimpleGrantedAuthority("sys:menu:add");
         List<GrantedAuthority> authorities = new ArrayList<>();
         authorities.add(authority);
         UserInfo userInfo = new UserInfo(username, password, authorities);
         userInfo.setEmail("123456@example.com");
         userInfo.setUserId("1111111");
         return userInfo;
     }
}
