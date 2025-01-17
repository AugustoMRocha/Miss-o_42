#!/bin/bash

# Verificar se não há argumentos
if [ $# -eq 0 ]; then
  echo "No arguments supplied"
else
  # Loop através dos argumentos e criar diretórios com prefixo 'ex'
  for arg in "$@"; do
    mkdir "ex$arg"
  done
fi
