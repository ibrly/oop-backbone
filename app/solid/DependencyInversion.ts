// D: Dependency Inversion. High-level policy should depend on abstractions, not on concrete details.
// A SignupService that news up its own SMTP mailer can't be reused or tested without SMTP.
// Depending on a Notifier interface lets the caller pick email, SMS or an in-memory fake.
export class SmtpMailer {
    send(to: string, text: string): string {
        return `smtp -> ${to}: ${text}`;
    }
}

// Violates DIP: the high-level service is welded to one low-level class.
export class SignupServiceWithSmtp {
    private mailer = new SmtpMailer();

    register(email: string): string {
        return this.mailer.send(email, 'welcome');
    }
}

// Respects DIP: both sides depend on this abstraction.
export interface Notifier {
    notify(to: string, text: string): string;
}

export class EmailNotifier implements Notifier {
    notify(to: string, text: string): string {
        return `email -> ${to}: ${text}`;
    }
}

export class SmsNotifier implements Notifier {
    notify(to: string, text: string): string {
        return `sms -> ${to}: ${text}`;
    }
}

export class SignupService {
    // The dependency is injected, so swapping it needs no change here.
    constructor(private notifier: Notifier) {
    }

    register(contact: string): string {
        return this.notifier.notify(contact, 'welcome');
    }
}
