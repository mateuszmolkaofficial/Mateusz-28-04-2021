import { updateRecord, compare, formatReturnData } from "./helpers"
import faker from "faker"
import { PriceSizeArray } from "."

describe("useXBTUSD helpers", () => {
  describe("formatReturnData", () => {
    it("should format data properly example 1", () => {
      const item1 = [faker.datatype.number({ min: 10, max: 19 }), faker.datatype.number()]
      const item2 = [faker.datatype.number({ min: 1, max: 9 }), faker.datatype.number()]
      const item3 = [faker.datatype.number({ min: 40, max: 50 }), faker.datatype.number()]
      const item4 = [faker.datatype.number({ min: 30, max: 39 }), faker.datatype.number()]

      const data = {
        [item1[0]]: item1[1],
        [item2[0]]: item2[1],
        [item3[0]]: item3[1],
        [item4[0]]: item4[1],
      }

      expect(formatReturnData(data, true, 3)).toEqual([
        [item4[0], item4[1], item1[1] + item2[1] + item4[1]],
        [item1[0], item1[1], item1[1] + item2[1]],
        [item2[0], item2[1], item2[1]],
      ])
    })

    it("should format data properly example 2", () => {
      const item1 = [faker.datatype.number({ min: 10, max: 19 }), faker.datatype.number()]
      const item2 = [faker.datatype.number({ min: 1, max: 9 }), faker.datatype.number()]
      const item3 = [faker.datatype.number({ min: 40, max: 50 }), faker.datatype.number()]
      const item4 = [faker.datatype.number({ min: 30, max: 39 }), faker.datatype.number()]

      const data = {
        [item1[0]]: item1[1],
        [item2[0]]: item2[1],
        [item3[0]]: item3[1],
        [item4[0]]: item4[1],
      }

      expect(formatReturnData(data, false, 3)).toEqual([
        [item3[0], item3[1], item3[1]],
        [item4[0], item4[1], item3[1] + item4[1]],
        [item1[0], item1[1], item1[1] + item3[1] + item4[1]],
      ])
    })
  })

  describe("compare", () => {
    it("should compare two numbers", () => {
      const item1: [number, number] = [faker.datatype.number(), faker.datatype.number()]
      const item2: [number, number] = [faker.datatype.number(), faker.datatype.number()]

      expect(compare(item1, item2)).toEqual(item1[0] - item2[0])
    })
  })

  describe("updateRecord", () => {
    it("should add a new record", () => {
      const item1: [number, number] = [faker.datatype.number(), faker.datatype.number()]
      const item2: [number, number] = [faker.datatype.number(), faker.datatype.number()]

      const update = [item1, item2]
      const result = updateRecord(update, {})

      expect(result).toEqual({
        [item1[0]]: item1[1],
        [item2[0]]: item2[1],
      })
    })

    it("should remove a record", () => {
      const item1: [number, number] = [faker.datatype.number(), faker.datatype.number()]
      const item2: [number, number] = [faker.datatype.number(), faker.datatype.number()]

      const update: PriceSizeArray = [[item1[0], 0]]
      const current = {
        [item1[0]]: item1[1],
        [item2[0]]: item2[1],
      }
      const result = updateRecord(update, current)

      expect(result).toEqual({
        [item2[0]]: item2[1],
      })
    })

    it("should update a record", () => {
      const item1: [number, number] = [faker.datatype.number(), faker.datatype.number()]
      const item2: [number, number] = [faker.datatype.number(), faker.datatype.number()]
      const updateValue = faker.datatype.number()

      const update: PriceSizeArray = [[item1[0], updateValue]]
      const current = {
        [item1[0]]: item1[1],
        [item2[0]]: item2[1],
      }
      const result = updateRecord(update, current)

      expect(result).toEqual({
        [item1[0]]: updateValue,
        [item2[0]]: item2[1],
      })
    })
  })
})
