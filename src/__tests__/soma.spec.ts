import { test, expect, describe } from "vitest";
import { soma, subtracao } from "../Calculadora";

//pode se utilizar todo um arq de teste ou suites

//descrever um suite - que seria um bloco de testes de uma funcionalidade igual
describe("Testes para a calculadora", () => {

    //este "" é tipo uma descrição do teste
test("verifica se a soma de 2 e 3 é igual a 5", () =>
{
    const result = soma(2, 3);

    //esperar que o resultado seja = 5
    expect(result).toBe(5);
})

test("verifica se a subtracao de 2 e 3 é igual a -1", () =>
{
    const result = subtracao(2, 3);

    expect(result).toBe(-1);
})
})







