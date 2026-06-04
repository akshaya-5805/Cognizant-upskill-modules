import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class LambdaSort {

    public static void main(String[] args) {

        List<String> names = new ArrayList<>();

        names.add("John");
        names.add("David");
        names.add("Alex");
        names.add("Bob");

        Collections.sort(names,
                (a, b) -> a.compareTo(b));

        System.out.println(names);
    }
}