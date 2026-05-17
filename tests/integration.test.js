// Teste de Integração simples para validar o contrato da API Open-Meteo

describe('Teste de Integração - API Open-Meteo', () => {
    
    test('Deve conectar com a API pública e retornar dados estruturados', async () => {
        const url = 'https://api.open-meteo.com/v1/forecast?latitude=-15.9894&longitude=-48.0444&current=temperature_2m,relative_humidity_2m,weather_code&timezone=America/Sao_Paulo';
        
        const response = await fetch(url);
        const data = await response.json();

        // Validações básicas para garantir que a API responde com o que o app precisa
        expect(response.status).toBe(200);
        expect(data).toHaveProperty('current');
        expect(data.current).toHaveProperty('temperature_2m');
        expect(data.current).toHaveProperty('relative_humidity_2m');
        
        // Garante que os tipos retornados são numéricos (evita NaN na tela)
        expect(typeof data.current.temperature_2m).toBe('number');
        expect(typeof data.current.relative_humidity_2m).toBe('number');
    });
});
