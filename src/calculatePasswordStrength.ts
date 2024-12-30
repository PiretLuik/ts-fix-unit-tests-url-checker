export function calculatePasswordStrength(password: string): string {
    let strength = 0;

    // Kontroll pikkuse järgi
    if (password.length >= 8) strength += 1; // Pikkus >= 8
    if (password.length >= 12) strength += 1; // Pikkus >= 12

    // Kontroll erinevate sümbolite olemasolu järgi
    if (/\d/.test(password)) strength += 1; // Numbrid
    if (/[a-z]/.test(password)) strength += 1; // Väiketähed
    if (/[A-Z]/.test(password)) strength += 1; // Suurtähed
    if (/[\W_]/.test(password)) strength += 1; // Erisümbolid

    // Tugevuse määramine
    if (strength <= 2) {
        return "Very Weak";
    } else if (strength === 3 && password.length >= 8) {
        return "Weak";
    } else if (strength === 4 && password.length >= 8) {
        return "Moderate";
    } else if (strength >= 5 && password.length >= 8) {
        return "Strong";
    }
    return "Weak"; // Vaikimisi Weak
}













