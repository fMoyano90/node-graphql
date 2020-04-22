import { IResolvers } from 'graphql-tools';

const query: IResolvers = {
  Query: {
    hola(): string {
      return 'Hola Mundo!';
    },
    holaConNombre(__: void, { nombre }): string {
      return `Hola ${nombre}`;
    },
    holaAlCursoGraphQL(): string {
      return 'Hola mundo en el curso de GraphQL';
    },
  },
};

export default query;
