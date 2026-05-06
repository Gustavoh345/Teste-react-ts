import { test, describe, expect } from "vitest";
import { getGithubUser } from "../services/github";

describe("Testes de conexão com o github", () => {
    test("Deve retornar os dados do usuario do github", async () =>{
        const username = "Gustavoh345";
        const userData = await getGithubUser(username);

        expect(userData).toHaveProperty("name");
        expect(userData).toHaveProperty("login");
        expect(userData).toHaveProperty("avatar_url");
        expect(userData).toHaveProperty("followers");
        expect(userData).toHaveProperty("public_repos");

        expect(userData.login).toBe(username;)
    })
})