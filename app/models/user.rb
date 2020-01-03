class User < ApplicationRecord

  def to_resource
    {
      id: self.id,
      name: self.name,
    }
  end
end
