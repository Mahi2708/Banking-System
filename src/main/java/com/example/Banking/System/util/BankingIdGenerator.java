package com.example.Banking.System.util;

import java.util.Random;

public class BankingIdGenerator {
    public static String generate(String mobile) {
        String last6 = mobile.length() >= 6 ? mobile.substring(mobile.length() - 6) : mobile;
        int rand = 100 + new Random().nextInt(900);
        return "BANK" + last6 + rand;
    }
}
