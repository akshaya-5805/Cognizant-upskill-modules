import java.util.List;

record Person(String name, int age) {}

public class RecordDemo {

    public static void main(String[] args) {

        List<Person> people = List.of(
                new Person("John", 25),
                new Person("David", 17),
                new Person("Alex", 30)
        );

        people.forEach(System.out::println);

        System.out.println("\nAge > 18");

        people.stream()
                .filter(p -> p.age() > 18)
                .forEach(System.out::println);
    }
}