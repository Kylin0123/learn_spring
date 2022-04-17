package com.alibaba.demo;

import org.junit.Test;
import redis.clients.jedis.Jedis;
import redis.clients.jedis.JedisPool;
import redis.clients.jedis.JedisPoolConfig;

import java.util.Map;

public class RedisTest {
    @Test
    public void demo1() {
        Jedis jedis = new Jedis("127.0.0.1", 6379);
        jedis.set("name", "imooc");
        String value = jedis.get("name");
        System.out.println(value);
        jedis.close();
    }

    @Test
    public void demo2() {
        JedisPoolConfig config = new JedisPoolConfig();
        config.setMaxTotal(30);
        config.setMaxIdle(10);

        JedisPool jedisPool = new JedisPool(config, "127.0.0.1", 6379);

        Jedis jedis = null;
        try {
            jedis = jedisPool.getResource();
            jedis.set("name", "张三");
            String value = jedis.get("name");
            System.out.println(value);
        }catch (Exception e){
            e.printStackTrace();
        }finally {
            if(jedis != null) {
                jedis.close();
            }
            jedisPool.close();
        }
    }

    @Test
    public void demo3() {
        Jedis jedis = new Jedis("127.0.0.1", 6379);
        jedis.hset("myhash", "username", "jack");
        jedis.hset("myhash", "age", "18");
        jedis.hget("myhash", "username");
        Map<String, String> result = jedis.hgetAll("myhash");
        System.out.println(result);
        jedis.close();
    }

}
