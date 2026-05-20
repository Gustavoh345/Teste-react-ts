//este "it" so funciona se estiver sendo realizada uma suite(varios testes), se for apenas 1 teste, usa-se test
import { describe, test, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { Button } from "../Button";
import userEvent from "@testing-library/user-event";


describe ("Testes do componente Button", 
() => {
    //variaveis vazias
    let user, handleClick, renderResult;

    //antes de cada test ele faz isso, pois isso era repetido em todos os testes
    //serve para renderizar, logo os testes nao sao responsaveis em renderizar componente, mas sim testar ele
    beforeEach(() => {
        user = userEvent.setup();
        handleClick = vi.fn();

        renderResult = <Button onClick={handleClick}>clique aqui</Button>
    })

    //devido ao await do clique no botao do user, vem este async antes dos parenteses para indicar que é uma funcao async
    it("Deve chamar a função ao clicar no botão", async () => {
        
        const ButtonElement = screen.getByRole("button", {
            name: /clique aqui/i,
        });

        await user.click(ButtonElement);

        expect(handleClick).toHaveBeenCalled();
    });
    

    it("Não deve ser clicável quando estiver desabilitado", async () => {

        renderResult.rerender(
            <Button onClick={handleClick} disabled>
                Clique aqui
            </Button>
        );

        const ButtonElement = screen.getByRole("button", {
            name: /clique aqui/i,
        });

        await user.click(ButtonElement);

        expect(handleClick).not.toHaveBeenCalled();
    });

    //verificar se o texto do botao esta aparecendo corretamente
    it("Deve renderizar o texto corretamente", async () => {

        const buttonElement = screen.getByRole("button", {
            name: /clique aqui/i,
        })

        expect(buttonElement).toBeInTheDocument();
        
        await user.click(ButtonElement);

        expect(handleClick).not.toHaveBeenCalled();
    });
});