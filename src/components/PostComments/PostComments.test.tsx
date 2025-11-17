import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });


    it('Deve permitir inserir dois comentários em um post', ()=>{
        render(<PostComment/>);
        const input = screen.getByTestId('area-comentario');
        const button = screen.getByTestId('envia-comentario');

        //Primeiro comentário
        fireEvent.change(input,{target:{value: 'Primeiro comentário'}});
        fireEvent.click(button);

        //Segundo comentário
        fireEvent.change(input,{target:{value: 'Segundo comentário'}});
        fireEvent.click(button);

        //verifica se os dois comentários aparecem na lista
        const comentarios = screen.getAllByTestId('elemento-comentado');
        expect(comentarios).toHaveLength(2);
    });
});