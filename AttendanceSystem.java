import java.util.*;

public class AttendanceSystem {

    private static final Map<String, Map<Integer, String>> attendance = new HashMap<>();

    public static void main(String[] args) {
        try (Scanner sc = new Scanner(System.in)) {
            // Create students
            System.out.println("Enter the number of students:");
            int numberOfStudents = sc.nextInt();
            for (int i = 0; i < numberOfStudents; i++) {
                System.out.println("Enter the name of student " + (i + 1) + ":");
                String name = sc.next();
                attendance.put(name, new HashMap<>());
            }

            // Mark attendance for multiple days
            System.out.println("Enter the number of days:");
            int numberOfDays = sc.nextInt();
            sc.nextLine();// consume newline
            for (int day = 1; day <= numberOfDays; day++) {
                System.out.println("Enter the names of students who are present on day " + day + ":");
                String[] presentStudents = sc.nextLine().split(" ");
                for (String student : presentStudents) {
                    attendance.get(student).put(day, "present");
                }
            }

            // Print attendance
            for (String student : attendance.keySet()) {
                System.out.println(student + ": ");
                for (int day = 1; day <= numberOfDays; day++) {
                    System.out.print(attendance.get(student).get(day) + " ");
                }
                System.out.println();
            }
        }
    }
}
