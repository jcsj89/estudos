const { request, response } = require("express");
const Contato = require("../models/ContatoModel");

exports.index = (request, response) => {
    response.render("contato", {
      contato: {}
  });
};

exports.register = async (request, response) => {
  try {
    const contato = new Contato(request.body);
    await contato.register();
      console.log(contato);
    if (contato.errors.length > 0) {
      request.flash("errors", contato.errors);
      request.session.save(() => response.redirect("/contato/index"));
      return;
    }

    request.flash("success", "Seu contato foi registrado.");
    request.session.save(() => response.redirect(`/contato/index/${contato.contato._id}`));
    return;
  } catch (e) {
    console.log(e);
    return response.render("404");
  }
};

exports.editIndex = async (request, response) => {
    if (!request.params.id) return response.render("404");
    const contato = await Contato.buscaPorId(request.params.id);
    if (!contato) return response.render('404');
    response.render('contato', {
        contato
    });
  return;
};

exports.edit = async (request, response) => {

  try {
    if (!request.params.id) return response.render("404");
    const contato = new Contato(request.body);
    await contato.edit(request.params.id);

    if (contato.errors.length > 0) {
      request.flash("errors", contato.errors);
      request.session.save(() => response.redirect("back"));
      return;
    }
    console.log(contato);
    request.flash("success", "Seu contato foi editado com sucesso.");
    request.session.save(() =>
      response.redirect(`/contato/index/${contato.contato._id}`)
    );
    return;
  } catch (e) {
    console.log(e);
    response.render('404');
  }
};

exports.delete = async (request, response) => {
  if (!request.params.id) return response.render("404");
  const contato = await Contato.delete(request.params.id);

  if (!contato) return response.render('404');
  request.flash("success", "Contato deletado com sucesso.");
  request.session.save(() => response.redirect('back'));
  return;
};
