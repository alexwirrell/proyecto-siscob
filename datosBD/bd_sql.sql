CREATE TABLE "centrocosto" (
  "cc_cod" varchar(4) NOT NULL,
  "cc_nom" varchar(40) NOT NULL,
  "cc_estado" int2 NOT NULL,
  CONSTRAINT "_copy_11" PRIMARY KEY ("cc_cod")
);

CREATE TABLE "ciudad" (
  "ci_codciudad" varchar(5) NOT NULL,
  "ci_nomciudad" varchar(30) NOT NULL,
  "ci_coddpto" varchar(4) NOT NULL,
  CONSTRAINT "_copy_14" PRIMARY KEY ("ci_codciudad")
);

CREATE TABLE "departamento" (
  "dp_coddpto" varchar(4) NOT NULL,
  "dp_nomdepto" varchar(30) NOT NULL,
  "dp_codpais" varchar(3) NOT NULL,
  CONSTRAINT "_copy_16" PRIMARY KEY ("dp_coddpto")
);

CREATE TABLE "detalcompr" (
  "det_tipocompr" varchar(6) NOT NULL,
  "det_numcompr" numeric(10,0) NOT NULL,
  "det_fecha" varchar(10) NOT NULL,
  "det_cuenta" varchar(16) NOT NULL,
  "det_nit" varchar(20),
  "det_pref" varchar(10),
  "det_numdoc" varchar(10),
  "det_descrip" varchar(255),
  "det_ntlza" varchar(1) NOT NULL,
  "det_debito" numeric(18,4),
  "det_credito" numeric(18,4),
  "det_base" numeric(22,4),
  "det_ctabase" varchar(16),
  "det_ceco" varchar(4),
  "det_vence" timestamp,
  "det_periodo" varchar(6) NOT NULL,
  "det_consec" int4 NOT NULL,
  CONSTRAINT "_copy_15" PRIMARY KEY ("det_tipocompr", "det_numcompr", "det_periodo")
);

CREATE TABLE "emp_id" (
  "emp_id" varchar(3) NOT NULL,
  "emp_nom" varchar(450) NOT NULL,
  "emp_cadconexion" text NOT NULL,
  CONSTRAINT "_copy_2" PRIMARY KEY ("emp_id")
);

CREATE TABLE "empresa_usario" (
  "emp_id" varchar(3) NOT NULL,
  "user_id" varchar(3) NOT NULL,
  CONSTRAINT "_copy_5" PRIMARY KEY ("emp_id", "user_id")
);

CREATE TABLE "encabcompr" (
  "enc_tipocompr" varchar(6) NOT NULL,
  "enc_numcompr" numeric(10,0) NOT NULL,
  "enc_fecha" varchar(10) NOT NULL,
  "enc_estado" varchar(1) NOT NULL,
  "enc_ruta" text,
  "enc_obsad" text,
  "enc_usu" varchar(3) NOT NULL,
  "enc_periodo" varchar(6) NOT NULL,
  CONSTRAINT "_copy_12" PRIMARY KEY ("enc_tipocompr", "enc_numcompr", "enc_periodo")
);

CREATE TABLE "modulo" (
  "idmodulo" int2 NOT NULL,
  "titulo" varchar(50),
  "descripcion" varchar(50),
  "status" int2,
  CONSTRAINT "_copy_10" PRIMARY KEY ("idmodulo")
);

CREATE TABLE "pais" (
  "pa_codpais" varchar(3) NOT NULL,
  "pa_nompais" varchar(30) NOT NULL,
  PRIMARY KEY ("pa_codpais")
);

CREATE TABLE "periodo" (
  "pe_periodo" numeric(2,0) NOT NULL,
  "pe_anno" numeric(4,0) NOT NULL,
  "pe_nomperi" varchar(15) NOT NULL,
  "pe_fechinic" varchar(10) NOT NULL,
  "pe_fechfina" varchar(10) NOT NULL,
  "pe_estado" int2 NOT NULL,
  CONSTRAINT "_copy_8" PRIMARY KEY ("pe_periodo", "pe_anno")
);

CREATE TABLE "permisos" (
  "idpermiso" int2 NOT NULL,
  "rolid" int2,
  "moduloid" int2,
  "r" int2 NOT NULL,
  "w" int2 NOT NULL,
  "u" int2 NOT NULL,
  "d" int2 NOT NULL,
  CONSTRAINT "_copy_6" PRIMARY KEY ("idpermiso")
);

CREATE TABLE "plancuenta" (
  "pc_cod" varchar(16) NOT NULL,
  "pc_nombre" varchar(45) NOT NULL,
  "pc_manceco" varchar(1) NOT NULL,
  "pc_tipoimpto" varchar(5) NOT NULL,
  "pc_porcentajeImpto" numeric(6,3) NOT NULL,
  "pc_estado" int2 NOT NULL,
  "pc_atribext01" varchar(50),
  "pc_atribext02" varchar(50),
  "pc_atribext03" varchar(50),
  "pc_atribext04" varchar(50),
  CONSTRAINT "_copy_13" PRIMARY KEY ("pc_cod")
);

CREATE TABLE "rol" (
  "idrol" int2 NOT NULL,
  "nombrerol" varchar(50),
  "descripcion" varchar(50),
  "status" int2 NOT NULL,
  CONSTRAINT "_copy_1" PRIMARY KEY ("idrol")
);

CREATE TABLE "tercero" (
  "te_nid" varchar(20) NOT NULL,
  "te_tipoter" varchar(2) NOT NULL,
  "te_dv" varchar(1) NOT NULL,
  "te_pn1" varchar(60),
  "te_on2" varchar(60),
  "te_pa1" varchar(60),
  "te_oa2" varchar(60),
  "te_razsocial" varchar(450),
  "te_dir" varchar(200) NOT NULL,
  "te_codciudad" varchar(5) NOT NULL,
  "te_email" varchar(100),
  "te_tel" varchar(22),
  "te_estado" int2 NOT NULL,
  "te_rutarut" text,
  CONSTRAINT "_copy_9" PRIMARY KEY ("te_nid")
);

CREATE TABLE "tipo" (

);

CREATE TABLE "tipocompr" (
  "tc_codigo" varchar(6) NOT NULL,
  "tc_nombre" varchar(30) NOT NULL,
  "tc_consauto" varchar(1) NOT NULL,
  "tc_consactual" numeric(10,0) NOT NULL,
  "tc_estado" int2 NOT NULL,
  CONSTRAINT "_copy_7" PRIMARY KEY ("tc_codigo")
);

CREATE TABLE "usuario" (
  "user_id" varchar(3) NOT NULL,
  "user_nom" varchar(3) NOT NULL,
  "user_clave" varchar(60) NOT NULL,
  CONSTRAINT "_copy_4" PRIMARY KEY ("user_id")
);

CREATE TABLE "usuarioactivo" (
  "user_id" varchar(3) NOT NULL,
  "rolid" int2 NOT NULL,
  CONSTRAINT "_copy_3" PRIMARY KEY ("user_id")
);

ALTER TABLE "ciudad" ADD CONSTRAINT "fk_ciudad_departamento" FOREIGN KEY ("ci_coddpto") REFERENCES "departamento" ("dp_coddpto");
ALTER TABLE "departamento" ADD CONSTRAINT "fk_departamento_pais" FOREIGN KEY ("dp_codpais") REFERENCES "pais" ("pa_codpais");
ALTER TABLE "detalcompr" ADD CONSTRAINT "fk_encab_Compr1" FOREIGN KEY ("det_tipocompr", "det_numcompr", "det_periodo") REFERENCES "encabcompr" ("enc_tipocompr", "enc_numcompr", "enc_periodo");
ALTER TABLE "detalcompr" ADD CONSTRAINT "fk_centroCosto_detalCompr" FOREIGN KEY ("det_ceco") REFERENCES "centrocosto" ("cc_cod");
ALTER TABLE "detalcompr" ADD CONSTRAINT "fk_planCuenta_detalCompr" FOREIGN KEY ("det_cuenta") REFERENCES "plancuenta" ("pc_cod");
ALTER TABLE "detalcompr" ADD CONSTRAINT "fk_tercero_detalCompr" FOREIGN KEY ("det_nit") REFERENCES "tercero" ("te_nid");
ALTER TABLE "empresa_usario" ADD CONSTRAINT "fk_emp_id_empresa_usuario" FOREIGN KEY ("emp_id") REFERENCES "emp_id" ("emp_id");
ALTER TABLE "empresa_usario" ADD CONSTRAINT "fk_usuario_empresa_usuario" FOREIGN KEY ("user_id") REFERENCES "usuario" ("user_id");
ALTER TABLE "encabcompr" ADD CONSTRAINT "fk_tipoCompr_encabCompr" FOREIGN KEY ("enc_tipocompr") REFERENCES "tipocompr" ("tc_codigo");
ALTER TABLE "permisos" ADD CONSTRAINT "fk_permisos_rol" FOREIGN KEY ("rolid") REFERENCES "rol" ("idrol");
ALTER TABLE "permisos" ADD CONSTRAINT "fk_permisos_modulo" FOREIGN KEY ("moduloid") REFERENCES "modulo" ("idmodulo");
ALTER TABLE "tercero" ADD CONSTRAINT "pk_tercero_ciudad" FOREIGN KEY ("te_codciudad") REFERENCES "ciudad" ("ci_codciudad");
ALTER TABLE "usuarioactivo" ADD CONSTRAINT "fk_usuarioActivo_rol" FOREIGN KEY ("rolid") REFERENCES "rol" ("idrol");

