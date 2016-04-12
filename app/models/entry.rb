class Entry < ActiveRecord::Base
  has_one :food
  belongs_to :user

  def as_json(options = {})
    super(options.merge(include: :user))
  end

end
