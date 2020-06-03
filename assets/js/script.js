$(function () {
  $("#cep").blur(function () {
    var cep = $("#cep").val();
    var url = "http://viacep.com.br/ws/" + cep + "/json/";
    $.ajax({
      url,
      success: function (result) {
        $("#logradouro").val(result.logradouro);
        $("#complemento").val(result.complemento);
        $("#bairro").val(result.bairro);
        $("#localidade").val(result.localidade);
        $("#uf").val(result.uf);
        $("#unidade").val(result.unidade);
        $("#ibge").val(result.ibge);
        $("#gia").val(result.gia);
      },
    });
  });
});
