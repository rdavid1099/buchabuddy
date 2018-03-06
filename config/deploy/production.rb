server "159.89.149.249", user: "deploy", roles: %w{app db web}

before :starting, :check_write_permissions
