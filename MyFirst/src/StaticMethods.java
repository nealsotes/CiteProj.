import java.util.ArrayList;
import java.util.*;


/**
 * Created by JPMC-PC11 on 22/05/2017.
 */
public class StaticMethods {
    public static int count(int n) {
        int z = 0;
        int sum = 0;

        do {
            sum += z;
            z++;
            System.out.println("[" + z + "]");


        } while (z <= 5);


        return sum;

    }

    public static int fibgenerator(int z) {
        int a = 0;
        int b = 1;
        int x;
        System.out.print("[" + b + "]");
        for (int i = 1; i < z; i++) {
            x = a + b;
            a = b;
            b = x;

            System.out.print("[" + x + "]");

        }
        return z;
    }

    public static String boyfriend(){
        List<String> boyfriendNames = new ArrayList<String>();
        boyfriendNames.add(0,"Neal");
        boyfriendNames.add("Kevin");
        boyfriendNames.add("Johnny");
        boyfriendNames.add("Sherwin");
        boyfriendNames.add("Xchan");

        Random boyRandomNames = new Random();
        int boyfriendNumber = boyRandomNames.nextInt(boyfriendNames.size());
        return boyfriendNames.get(boyfriendNumber);
    }
    public static String girlFriend(){
        List<String> girlfriendNames = new ArrayList<String>();
        girlfriendNames.add(0,"Karen");
        girlfriendNames.add("Crisol");
        girlfriendNames.add("Johema");
        girlfriendNames.add("Eureca");

        Random girlRandomNames = new Random();
        int girlfriendNumber = girlRandomNames.nextInt(girlfriendNames.size());
        return girlfriendNames.get(girlfriendNumber);
    }




    public static String status(){
        List<String> genNames = new ArrayList<String>();
        genNames.add(0,"likes");
        genNames.add("is mad with");
        genNames.add("is happy with");
        genNames.add("is in love with");
        genNames.add("is in a complicated relationship with");

        Random genRandomNames = new Random();
        int statusName = genRandomNames.nextInt(genNames.size());
        return genNames.get(statusName);



    }

}







