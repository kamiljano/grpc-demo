'use server';

export const getData = async (): Promise<string> => {
  return process.env.PATH || 'nothing';
}