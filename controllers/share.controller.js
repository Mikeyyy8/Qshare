import { nanoid } from "nanoid"
import textSchema from "../models/text.model.js"

export const shareFile = async (req, res) => {
  const text = req.body.text

  try {
    if (!text) {
      res.status(400).json({ message: "Field cannot be empty" })
      return
    }

    const id = nanoid(5)
    const newText = new textSchema({ id: id, text: text })
    await newText.save()

    res.status(200).json({message: text, id: id})
  } catch (error) {
    res.status(500).json({ message: "Internal server error" })
  }
}

export const retrieveFile = async (req, res) => {
  const id = req.params.id

  try {
    if (!id) {
      res.status(400).json({ message: "Id cannot be empty" })
    }
    const file = await textSchema.findOne({ id: id })
    if (!file) {
      res.status(404).json({ message: "File not found" })
      return
    }
    res.status(200).json({ data: { id: id, text: file.text, createdAt: file.createdAt } })
  } catch (error) {
    res.status(500).json({ message: "Internal server rror" })
  }
}
