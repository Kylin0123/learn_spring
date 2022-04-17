package com.alibaba.demo;

import com.alibaba.demo.entity.Order;
import com.alibaba.demo.producer.OrderSender;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.UUID;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = Application.class)
public class RabbitMQTest {

    @Autowired
    private OrderSender orderSender;
    @Test
    public void sendTest1() throws Exception {
        Order order = new Order();
        order.setId("202105180000001");
        order.setName("test order #1");
        order.setMessageId(System.currentTimeMillis() + "$" + UUID.randomUUID().toString());
        orderSender.send(order);

        Order order2 = new Order();
        order2.setId("202105180000002");
        order2.setName("test order #2");
        order2.setMessageId(System.currentTimeMillis() + "$" + UUID.randomUUID().toString());
        orderSender.send(order2);
    }

}
