import { render, screen } from "@testing-library/react";
import Post from ".";

describe('Teste <Post/>', ()=>{
    it('Esperado renderizar corretamente', ()=>{
        render(
            <Post imageUrl="https://placehold.co/400">
                Teste
            </Post>
        );
        expect(screen.getByText('Teste')).toBeInTheDocument();
    })
})