const Gremio = require('../models/Gremio');

const errorMessages = [];

exports.addGremio = async (req, res) => {
  const { name, house, cantidadMiembros, status } = req.body;

  try {
    const existingGremio = await Gremio.findOne({ name });

    if (existingGremio) {
      errorMessages.push("El nombre ya existe!");
    }

    if (errorMessages.length) {
      return res.status(400).json({
        message: "Bad request",
        details: errorMessages,
      });
    }

    const newGremio = new Gremio({
      name,
      house,
      cantidadMiembros,
      status,
    });

    await newGremio.save();

    res.status(201).json({
      message: "Gremio agregado con éxito",
      gremio: newGremio,
    });
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

exports.updateName = async (req, res) => {
  const { id, name } = req.body;

  try {
    const existingGremio = await Gremio.findOne({ name });

    if (existingGremio) {
      errorMessages.push("El nombre ya existe!");
    }

    if (errorMessages.length) {
      return res.status(400).json({
        message: "Bad request",
        details: errorMessages,
      });
    }

    const gremio = await Gremio.findByIdAndUpdate(
      id,
      { name },
      { new: true }
    );

    if (!gremio) {
      return res.status(404).json({ message: "Gremio no encontrado" });
    }

    res.status(200).json({
      message: "Nombre actualizado con éxito",
      gremio,
    });
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

exports.deleteGremio = async (req, res) => {
  const { id } = req.body;

  try {
    const gremio = await Gremio.findByIdAndUpdate(
      id,
      { status: 0 },
      { new: true }
    );

    if (!gremio) {
      return res.status(404).json({ message: "Gremio no encontrado" });
    }

    res.status(200).json({
      message: "Gremio eliminado con éxito",
      gremio,
    });
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};




exports.getGremio = async (req, res) => {
  const { id } = req.body;

  try {
    const gremio = await Gremio.findById(id);

    if (!gremio) {
      return res.status(404).json({ message: "Gremio no encontrado" });
    }

    res.status(200).json({
      message: "Datos del gremio",
      gremio,
    });
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};