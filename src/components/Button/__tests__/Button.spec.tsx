//este "it" so funciona se estiver sendo realizada uma suite(varios testes), se for apenas 1 teste, usa-se test
import { describe, test, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Button } from "../Button";

describe ("Testes do componente Button", 
() => {
    it("Deve chamar a função ao clicar no botão", () => {

    });
    
    it("Não deve ser clicável quando estiver desabilitado", () => {

    });

    //verificar se o texto do botao esta aparecendo corretamente
    it("Deve renderizar o texto corretamente", () => {
        render(<Button>Salvar perfil</Button>)
        const buttonElement = screen.getByRole("button", {
            name: /salvar perfil/i,
        })

        expect(buttonElement).toBeInTheDocument();
        ;
    });
});