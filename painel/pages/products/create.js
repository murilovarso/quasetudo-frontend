import React, { useState } from 'react'
import Layout from '../../components/Layout'
import Title from '../../components/Title'
import { useMutation, useQuery, fetcher } from '../../lib/graphql'
import { useFormik, FieldArray, FormikProvider } from 'formik'
import { useRouter } from 'next/router'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Select from '../../components/Select'
import Table from '../../components/Table'
import * as Yup from 'yup'

const CREATE_PRODUCT = `
    mutation createProduct($name: String!, $slug: String!, $description: String!, $category: String!, $sku: String, $price: Float, $weight: Float, $optionNames: [String!], $stock: Int!, $variations: [VariationInput!]) {
      panelCreateProduct (input: {
        name: $name,
        slug: $slug,
        description: $description,
        category: $category,
        sku: $sku,
        price: $price,
        weight: $weight,
        optionNames: $optionNames,
        stock: $stock,
        variations: $variations
      }) {
        id
        name
        slug
      }
    }
  `
const GET_ALL_CATEGORIES = `
  query {
    getAllCategories{
      id
      name
      slug
    }
  }
`

const ProductSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Por favor, informe pelo menos um nome com 3 caracteres.')
    .required('Por favor, informe um nome.'),
  slug: Yup.string()
    .min(3, 'Por favor, informe um slug para a categoria')
    .required('Por favor, informe um slug para a categoria.')
    .test(
      'is-unique',
      'Por favor, utilize outro slug. Este já está em uso.',
      async value => {
        const ret = await fetcher(
          JSON.stringify({
            query: `
                query{
                  getProductBySlug(slug:"${value}"){
                    id
                  }
                }
              `
          })
        )
        if (ret.errors) {
          return true
        }
        return false
      }
    ),
  description: Yup.string()
    .min(20, 'Por favor, informe pelo menos uma descrição com 20 caracteres.')
    .required('Por favor, informe uma descrição.'),
  category: Yup.string()
    .min(1, 'Por favor, selecione uma categoria.')
    .required('Por favor, selecione uma categoria.')
})

const Index = () => {
  const router = useRouter()
  const [data, createProduct] = useMutation(CREATE_PRODUCT)
  const { data: categories, mutate } = useQuery(GET_ALL_CATEGORIES)
  const form = useFormik({
    initialValues: {
      name: '',
      slug: '',
      description: '',
      category: '',
      sku: '',
      price: 0,
      weight: 0,
      stock: 0,
      optionName1: '',
      optionName2: '',
      variations: []
    },
    onSubmit: async values => {
      const newValues = {
        ...values,
        price: Number(values.price),
        weight: Number(values.weight),
        stock: Number(values.stock),
        optionNames: [values.optionName1, values.optionName2],
        variations: values.variations.map(variation => {
          return {
            ...variation,
            price: Number(variation.price),
            weight: Number(variation.weight),
            stock: Number(variation.stock)
          }
        })
      }
      const data = await createProduct(newValues)
      if (data && !data.errors) {
        router.push('/products')
      }
    },
    validationSchema: ProductSchema
  })


  let options = []
  if (categories && categories.getAllCategories) {
    options = categories.getAllCategories.map(item => {
      return {
        id: item.id,
        label: item.name
      }
    })
  }

  return (
    <Layout>
      <Title>Criar novo produto</Title>
      <div className='mt-8'></div>
      <div>
        <Button.LinkOutline href='/products'>Voltar</Button.LinkOutline>
      </div>
      <div className='flex flex-col mt-8'>
        <div className='-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8'>
          <div className='align-middle inline-block min-w-full bg-white shadow overflow-hidden sm:rounded-lg border-b border-gray-200 p-12'>
            {data && !!data.errors && (
              <p className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 relative'>
                Ocorreu um erro ao salvar os dados.
              </p>
            )}
            <form onSubmit={form.handleSubmit}>
              <div className='flex flex-wrap -mx-3 mb-6'>
                <Input
                  label='Nome do produto'
                  placeholder='Preencha com o nome do produto'
                  value={form.values.name}
                  onChange={form.handleChange}
                  name='name'
                  errorMessage={form.errors.name}
                />
                <Input
                  label='Slug do produto'
                  placeholder='Preencha com o slug do produto'
                  value={form.values.slug}
                  onChange={form.handleChange}
                  name='slug'
                  helpText='Slug é utilizado para URLs amigáveis.'
                  errorMessage={form.errors.slug}
                />
                <Input
                  label='Descrição do produto'
                  placeholder='Preencha com descrição do produto'
                  value={form.values.description}
                  onChange={form.handleChange}
                  name='description'
                  errorMessage={form.errors.description}
                />
                <Select
                  label='Seleciona a categoria'
                  name='category'
                  onChange={form.handleChange}
                  value={form.values.category}
                  options={options}
                  errorMessage={form.errors.category}
                  initial={{ id: '', label: 'Selecione...' }}
                />
                <Input
                  label='SKU do produto'
                  placeholder='Preencha com o SKU do produto'
                  value={form.values.sku}
                  onChange={form.handleChange}
                  name='sku'
                  errorMessage={form.errors.sku}
                />
                <Input
                  label='Preço do produto'
                  placeholder='Preencha com o preço do produto'
                  value={form.values.price}
                  onChange={form.handleChange}
                  name='price'
                  errorMessage={form.errors.price}
                />
                <Input
                  label='Peso do produto (em gramas)'
                  placeholder='Preencha com o peso do produto'
                  value={form.values.weight}
                  onChange={form.handleChange}
                  name='weight'
                  errorMessage={form.errors.weight}
                />
                <Input
                  label='Estoque do produto'
                  placeholder='Preencha com o estoque do produto'
                  value={form.values.stock}
                  onChange={form.handleChange}
                  name='stock'
                  errorMessage={form.errors.stock}
                />
                <h3>Variações / grade de produtos:</h3>
                <Input
                  label='Opção de variação 1'
                  placeholder='Preencha com o peso do produto'
                  value={form.values.optionName1}
                  onChange={form.handleChange}
                  name='optionName1'
                  errorMessage={form.errors.optionName1}
                />
                <Input
                  label='Opção de variação 2'
                  placeholder='Preencha com o peso do produto'
                  value={form.values.optionName2}
                  onChange={form.handleChange}
                  name='optionName2'
                  errorMessage={form.errors.optionName2}
                />
              </div>
              {form.values.optionName1 !== '' && (
                <>
                  <FormikProvider value={form}>
                    <FieldArray
                      name='variations'
                      render={arrayHelpers => {
                        return (
                          <div className='shadow'>
                            <Button
                              type='button'
                              onClick={() =>
                                arrayHelpers.push({
                                  optionName1: '',
                                  optionName2: '',
                                  sku: '',
                                  price: 0,
                                  weight: 0,
                                  stock: 0
                                })
                              }
                            >
                              Adicionar variação
                            </Button>
                            <Table>
                              <Table.Head>
                                <Table.Th>{form.values.optionName1}</Table.Th>
                                {form.values.optionName2 !== '' && (
                                  <Table.Th>{form.values.optionName2}</Table.Th>
                                )}
                                <Table.Th>SKU</Table.Th>
                                <Table.Th>Preço</Table.Th>
                                <Table.Th>Peso</Table.Th>
                                <Table.Th>Estoque</Table.Th>
                                <Table.Th>-</Table.Th>
                              </Table.Head>

                              <Table.Body>
                                {form.values.variations.map(
                                  (variation, index) => {
                                    return (
                                      <Table.Tr key={index}>
                                        <Table.Td>
                                          <Input
                                            label={form.values.optionName1}
                                            placeholder='Preencha o nome da variação'
                                            value={
                                              form.values.variations[index]
                                                .optionName1
                                            }
                                            onChange={form.handleChange}
                                            name={`variations.${index}.optionName1`}
                                          />
                                        </Table.Td>
                                        {form.values.optionName2 !== '' && (
                                          <Table.Td>
                                            <Input
                                              label={form.values.optionName2}
                                              placeholder='Preencha com o nome da variação'
                                              value={
                                                form.values.variations[index]
                                                  .optionName2
                                              }
                                              onChange={form.handleChange}
                                              name={`variations.${index}.optionName2`}
                                            />
                                          </Table.Td>
                                        )}
                                        <Table.Td>
                                          <Input
                                            label='SKU'
                                            placeholder='Preencha com o nome da variação'
                                            value={
                                              form.values.variations[index].sku
                                            }
                                            onChange={form.handleChange}
                                            name={`variations.${index}.sku`}
                                          />
                                        </Table.Td>
                                        <Table.Td>
                                          <Input
                                            label='Preço'
                                            placeholder='Preencha com o preço da variação'
                                            value={
                                              form.values.variations[index]
                                                .price
                                            }
                                            onChange={form.handleChange}
                                            name={`variations.${index}.price`}
                                          />
                                        </Table.Td>
                                        <Table.Td>
                                          <Input
                                            label='Peso'
                                            placeholder='Preencha com o peso da variação'
                                            value={
                                              form.values.variations[index]
                                                .weight
                                            }
                                            onChange={form.handleChange}
                                            name={`variations.${index}.weight`}
                                          />
                                        </Table.Td>
                                        <Table.Td>
                                          <Input
                                            label='Estoque'
                                            placeholder='Preencha com o estoque da variação'
                                            value={
                                              form.values.variations[index]
                                                .stock
                                            }
                                            onChange={form.handleChange}
                                            name={`variations.${index}.stock`}
                                          />
                                        </Table.Td>
                                        <Table.Td>
                                          <Button
                                            type='button'
                                            onClick={() =>
                                              arrayHelpers.remove(index)
                                            }
                                          >
                                            Excluir
                                          </Button>
                                        </Table.Td>
                                      </Table.Tr>
                                    )
                                  }
                                )}
                              </Table.Body>
                            </Table>
                          </div>
                        )
                      }}
                    />
                  </FormikProvider>
                </>
              )}
              <Button>Criar produto</Button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default Index