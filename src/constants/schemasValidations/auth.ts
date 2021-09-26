export const emailSchema = {
    presence: { allowEmpty: false, message: '^*Este campo não pode ser vazio' },
    email: { message: '^O e-mail está incorreto' }
}

export const passwordSchema = {
    presence: { allowEmpty: false, message: '^*Este campo não pode ser vazio' },
    length: {
        minimum: 6,
        message: "^A senha não pode ter menos de 6 caracteres"
    }
}

export const nameSchema = {
    presence: { allowEmpty: false, message: '^*Este campo não pode ser vazio' }
}