import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@SpringBootApplication
public class Main {

    public static void main(String[] args) {
        SpringApplication.run(Main.class, args);
    }

    @GetMapping("/")
    public String home() {
        return "index";
    }

    @PostMapping("/submitRSVP")
    @ResponseBody
    public String submitRSVP(@RequestBody RsvpRequest request) {
        // Process the RSVP request (e.g., send a message)
        // For simplicity, let's just print the details for now
        System.out.println("RSVP received: " + request.getPhoneNumber() + " - " + request.getMessage());
        return "RSVP submitted successfully!";
    }

    public static class RsvpRequest {
        private String phoneNumber;
        private String message;

        // Getters and setters
        // No-argument constructor

        public String getPhoneNumber() {
            return phoneNumber;
        }

        public void setPhoneNumber(String phoneNumber) {
            this.phoneNumber = phoneNumber;
        }

        public String getMessage() {
            return message;
        }

        public void setMessage(String message) {
            this.message = message;
        }
    }
}
