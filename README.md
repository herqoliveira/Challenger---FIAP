# Challenge Passa a Bola

---
    Henrique de Oliveira Gomes           | RM566424
    Henrique Kolomyes Silveira           | RM563467
    Matheus Santos de Oliveira           | RM561982
    Vinicius Alexandre Aureliano Ribeiro | RM561606

---

# Passa A Bola ⚽  

Aplicação web desenvolvida como parte de um projeto de **storytelling e tecnologia** para democratizar o futebol feminino no Brasil.  

🔗 **Acesse aqui:** [Passa A Bola](http://challenger-fiap-v8zj.vercel.app)  

**Login de acesso:**  
```
Email: carolzinha1991@gmail.com  
Senha: Carol1234
```

---

## 🚀 Funcionalidades  

- **📸 Perfil de atleta (portfólio esportivo):**  
  Um espaço onde a jogadora pode se divulgar como em uma rede social, publicando vídeos, gols, conquistas, posição em campo e histórico esportivo.  

- **🔎 Busca por partidas e oportunidades:**  
  Página para encontrar **jogos, peneiras e amistosos**, permitindo que jogadoras marquem partidas, escolinhas divulguem eventos e novas amizades surjam.  

- **🏟️ Reserva de quadras (Arena Passa A Bola):**  
  Intermediação para facilitar reservas e organização de partidas.  

- **📺 Jogos ao vivo e notícias:**  
  Acompanhamento de partidas em tempo real, com filtros personalizados para seguir seu time favorito e acesso a notícias sobre futebol feminino.  

- **🛍️ Loja oficial:**  
  Espaço para comercialização de produtos ligados ao projeto **Passa A Bola**.  

---

## 🛠️ Tecnologias Utilizadas  

- **React + Vite** ⚛️  
- **TailwindCSS** 🎨  
- **TypeScript** 📘  
- **Vercel** (deploy) ☁️  

---

## 📌 Objetivo  

Criar um **espaço acessível e democrático** para jogadoras de todo o Brasil, promovendo inclusão, visibilidade e crescimento do **futebol feminino**, conectando atletas, clubes e fãs em uma única plataforma.  

---

## ⚡ Tratamento de Erros  

- **Camada de API:** todas as chamadas usam `try/catch` e verificam `response.ok`.  
- **Mensagens amigáveis** para o usuário em caso de falha.  
- **Error Boundary** em React para capturar erros de renderização.  
- **Logs de erro** podem ser enviados para monitoramento (ex.: Sentry).  

Exemplo:
```ts
try {
  const resp = await fetch("/api/users/1");
  if (!resp.ok) throw new Error("Erro ao buscar usuário.");
  return await resp.json();
} catch (error) {
  console.error(error);
  alert("Não foi possível carregar os dados.");
}
```

---

## 🧪 Testes Unitários  

- Utilizamos **Jest + React Testing Library**.  
- Testes garantem o funcionamento de componentes, hooks e funções utilitárias.  

Rodar os testes:
```bash
npm run test
```

Exemplo:
```tsx
import { render, screen } from "@testing-library/react";
import MyComponent from "../MyComponent";

test("renderiza título corretamente", () => {
  render(<MyComponent />);
  expect(screen.getByText("Passa a Bola")).toBeInTheDocument();
});
```

---

## 📖 Documentação de Endpoints  

A API está documentada com **Swagger**.  

### Exemplo: `/api/users/:id`  
- **Método:** `GET`  
- **Descrição:** Retorna informações do usuário.  
- **Resposta 200:**
```json
{
  "id": 1,
  "nome": "Maria Silva",
  "tipo": "jogadora"
}
```
- **Resposta 404:**
```json
{ "error": "Usuário não encontrado" }
```

📌 Acesse a doc em: `http://localhost:3000/api-docs`

---

## 🌱 Script de Seed  

Para popular o banco com dados iniciais de teste:  

```bash
npx prisma db seed
```

Exemplo de `prisma/seed.ts`:
```ts
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: [
      { nome: "Maria Silva", tipo: "jogadora" },
      { nome: "João Santos", tipo: "olheiro" }
    ]
  });
}

main()
  .then(() => console.log("Seed executado com sucesso"))
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
```

---

## ▶️ Como Rodar o Projeto  

1. Clone o repositório:  
```bash
git clone https://github.com/herqoliveira/Challenger---FIAP
cd Challenger---FIAP
```

2. Instale as dependências:  
```bash
npm install
```

3. Rodar o frontend:  
```bash
npm run dev
```

4. Rodar o backend:  
```bash
npm run start
```

---

## 👨‍💻 Contribuidores  

- Herq Oliveira  
- Equipe FIAP Challenge  
