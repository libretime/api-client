# coding: utf-8

"""
    LibreTime API

    Radio Broadcast & Automation Platform

    The version of the OpenAPI document: 2.0.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


from __future__ import annotations
import pprint
import re  # noqa: F401
import json

from datetime import datetime
from typing import Optional
from pydantic import BaseModel, StrictInt, StrictStr, constr

class PatchedWebstream(BaseModel):
    """
    PatchedWebstream
    """
    id: Optional[StrictInt] = None
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None
    last_played_at: Optional[datetime] = None
    name: Optional[constr(strict=True, max_length=255)] = None
    description: Optional[constr(strict=True, max_length=255)] = None
    url: Optional[constr(strict=True, max_length=512)] = None
    length: Optional[StrictStr] = None
    mime: Optional[constr(strict=True, max_length=1024)] = None
    owner: Optional[StrictInt] = None
    __properties = ["id", "created_at", "updated_at", "last_played_at", "name", "description", "url", "length", "mime", "owner"]

    class Config:
        """Pydantic configuration"""
        allow_population_by_field_name = True
        validate_assignment = True

    def to_str(self) -> str:
        """Returns the string representation of the model using alias"""
        return pprint.pformat(self.dict(by_alias=True))

    def to_json(self) -> str:
        """Returns the JSON representation of the model using alias"""
        return json.dumps(self.to_dict())

    @classmethod
    def from_json(cls, json_str: str) -> PatchedWebstream:
        """Create an instance of PatchedWebstream from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                            "id",
                          },
                          exclude_none=True)
        # set to None if last_played_at (nullable) is None
        # and __fields_set__ contains the field
        if self.last_played_at is None and "last_played_at" in self.__fields_set__:
            _dict['last_played_at'] = None

        # set to None if mime (nullable) is None
        # and __fields_set__ contains the field
        if self.mime is None and "mime" in self.__fields_set__:
            _dict['mime'] = None

        # set to None if owner (nullable) is None
        # and __fields_set__ contains the field
        if self.owner is None and "owner" in self.__fields_set__:
            _dict['owner'] = None

        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> PatchedWebstream:
        """Create an instance of PatchedWebstream from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return PatchedWebstream.parse_obj(obj)

        _obj = PatchedWebstream.parse_obj({
            "id": obj.get("id"),
            "created_at": obj.get("created_at"),
            "updated_at": obj.get("updated_at"),
            "last_played_at": obj.get("last_played_at"),
            "name": obj.get("name"),
            "description": obj.get("description"),
            "url": obj.get("url"),
            "length": obj.get("length"),
            "mime": obj.get("mime"),
            "owner": obj.get("owner")
        })
        return _obj

