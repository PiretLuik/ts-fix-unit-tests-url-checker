import { calculatePasswordStrength } from "../src/calculatePasswordStrength";

describe("Tests for calculatePasswordStrength method", () => {
    const VERY_WEAK = "Very Weak";
    const WEAK = "Weak";
    const MODERATE = "Moderate";
    const STRONG = "Strong";

    describe(`Tests for ${VERY_WEAK} passwords`, () => {
        test("Empty password", () => {
            expect(calculatePasswordStrength("")).toBe(VERY_WEAK);
        });
        test("Password with only digits", () => {
            expect(calculatePasswordStrength("12345")).toBe(VERY_WEAK);
        });
        test("Password with only lowercase letters", () => {
            expect(calculatePasswordStrength("aljona")).toBe(VERY_WEAK);
        });
    });

    describe(`Tests for ${WEAK} passwords`, () => {
        test("Password with lowercase and special character", () => {
            expect(calculatePasswordStrength("elisabeth?")).toBe(WEAK);
        });
        test("Password with lowercase, uppercase, and digit", () => {
            expect(calculatePasswordStrength("Abi1")).toBe(WEAK);
        });
    });

    describe(`Tests for ${MODERATE} passwords`, () => {
        test("Password with mixed characters and length >= 8", () => {
            expect(calculatePasswordStrength("kopoRaTi38")).toBe(MODERATE);
        });
        test("Password with mixed characters but length < 12", () => {
            expect(calculatePasswordStrength("Xx12345678")).toBe(MODERATE);
        });
    });

    describe(`Tests for ${STRONG} passwords`, () => {
        test("Password with strong combination and length >= 12", () => {
            expect(calculatePasswordStrength("Xx@12345abcd")).toBe(STRONG);
        });
    });
});



