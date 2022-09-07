public class Person {
    // 1. 클래스 필드 정의
    // 클래스 필드는 클래스 몸체에 this 없이 선언해야 한다.
    private String firstName = "";
    private String lastName = "";

    // 생성자
    Person(String firstName, String lastName) {
        // 3. this는 언제나 클래스가 생성할 인스턴스를 가리킨다.
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public String getFullname(){
        // 2. 클래스 필드 참조
        // this 없이도 클래스 필드를 참조할 수 있다. 
        return firstName + " " + lastName;
    }

}